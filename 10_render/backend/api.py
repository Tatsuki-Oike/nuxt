from flask import Flask, request
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import json
import time
import uuid

db = SQLAlchemy()
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
db.init_app(app)
CORS(app)

class Task(db.Model):
    id = db.Column(db.String, primary_key=True)
    task = db.Column(db.String, nullable=False)
    status = db.Column(db.String, nullable=False)

class AllTasks(Resource):
    def get(self):
        try:
            time.sleep(1)
            tasks = db.session.query(Task).all()
            tasks_list = []
            for task in tasks:
                tasks_list.append(
                    {
                        "id": str(task.id),
                        "task": str(task.task),
                        "status": str(task.status)
                    }
                )

            status_code = 200
            response = {
                'taskList': tasks_list,
                'error': None
                }
        except Exception as e:
            status_code = 500
            response = {
                'taskList': [],
                'error': str(e)
                }

        return {
            "statusCode": status_code,
            "body": response
        }
    
    def post(self):
        try:
            data = json.loads(request.data)
            task = Task(
                id =  str(uuid.uuid4()),
                task = data["task"],
                status = "todo",
            )
            db.session.add(task)
            db.session.commit()

            status_code = 200
            response = {
                'task': str(task),
                'error': None
                }
        except Exception as e:
            status_code = 500
            response = {
                'task': [],
                'error': str(e)
                }
            
        return {
            "statusCode": status_code,
            "body": response
        }

    def delete(self):
        try:
            db_resp = db.session.query(Task).delete()
            db.session.commit()

            status_code = 200
            response = {
                "taskCount": {
                        "count": int(db_resp)
                    },
                "error": None
            }
        except Exception as e:
            status_code = 500
            response = {
                "taskCount": {
                    "count": 0
                    },
                "error": str(e)
                }
            
        return {
            "statusCode": status_code,
            "body": response
        }
    
if __name__ == '__main__':
    api = Api(app)

    api.add_resource(AllTasks, '/api/task')

    with app.app_context():
        db.create_all()
    
    app.run(debug=True)