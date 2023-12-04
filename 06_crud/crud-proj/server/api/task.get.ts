import { PrismaClient } from '@prisma/client';

type TaskType = {
    id: string;
    task: string;
    status: string;
  }

type ResType = {
    statusCode: number;
    body: {
        taskList: TaskType[];
        error: string;
    }
}

export default defineEventHandler(
    async (): Promise<ResType> => {

        let statusCode;
        let response;

        try {

            // 1秒待つ
            const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
            await delay(1000);

            // db
            const prisma = new PrismaClient();
            const dbResp = await prisma.task.findMany()

            // response
            statusCode = 200
            response = {
                "taskList": dbResp,
                "error": ""
                }  
        } catch (error: any) {
            statusCode = 500
            response = {
                "taskList": [],
                "error": error.message
            }
        }
        
        return {
            statusCode: statusCode,
            body: response
        };
    }
)
