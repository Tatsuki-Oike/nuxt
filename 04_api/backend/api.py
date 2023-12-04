from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS
import json
import time

app = Flask(__name__)
CORS(app)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        try:
            query_data = request.args

            response = {
                "status": "SUCCESS",
                "body": {
                    "method": "GET",
                    "query": query_data
                    }
                }
        except Exception as e:
            response = {
                "status": "FAIL",
                "error": str(e)
                }
        return response
    
    def post(self):
        try:
            query_data = request.args
            body_data = json.loads(request.data)
            response = {
                "status": "SUCCESS",
                "body": {
                    "method": "POST",
                    "query": query_data,
                    "body_data": body_data
                    }
                }
        except Exception as e:
            response = {
                "status": "FAIL",
                "error": str(e)
                }
        return response
    
class Param(Resource):
    def get(self, id):
        try:
            response = {
                "status": "SUCCESS",
                "body": {"id": id}
                }
        except Exception as e:
            response = {
                "status": "FAIL",
                "error": str(e)
                }
        return response
    
class Sleep(Resource):
    def get(self):
        try:

            time.sleep(3)
            query_data = request.args

            response = {
                "status": "SUCCESS",
                "body": {
                    "method": "GET",
                    "query": query_data
                    }
                }
        except Exception as e:
            response = {
                "status": "FAIL",
                "error": str(e)
                }
        return response

api.add_resource(HelloWorld, '/api/helloWorld')
api.add_resource(Param, '/api/param/<int:id>')
api.add_resource(Sleep, '/api/sleep')

if __name__ == '__main__':
    app.run(debug=True)
    