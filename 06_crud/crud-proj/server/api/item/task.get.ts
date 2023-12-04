import { PrismaClient } from '@prisma/client';

type TaskType = {
    id: string;
    task: string;
    status: string;
  }

type ResType = {
    statusCode: number;
    body: {
        task: TaskType | null;
        error: string;
    }
}

export default defineEventHandler(
    async (event): Promise<ResType> => {

        let statusCode;
        let response;

        try {

            // 1秒待つ
            const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
            await delay(1000);

            const query: {id: string} = getQuery(event)

            // db
            const prisma = new PrismaClient();
            const dbResp = await prisma.task.findUnique({
                    where: { id: query.id }
                })

            // response
            statusCode = 200
            response = {
                "task": dbResp,
                "error": ""
                }  
        } catch (error: any) {
            statusCode = 500
            response = {
                "task": null,
                "error": error.message
            }
        }
        
        return {
            statusCode: statusCode,
            body: response
        };
    }
)
