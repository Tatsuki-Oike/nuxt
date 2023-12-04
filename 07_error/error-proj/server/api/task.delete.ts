import { PrismaClient } from '@prisma/client';

type ResType = {
    statusCode: number;
    body: {
        taskCount: {
            count: number;
        };
        error: string;
    }
}

export default defineEventHandler(
    async (): Promise<ResType> => {
        
        // throw createError("サーバーの処理中にERROR")
        
        let statusCode;
        let response;

        try {    

            // throw createError("データベースの処理中にERROR")

            // 1秒待つ
            const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
            await delay(1000);

            // db
            const prisma = new PrismaClient();
            const dbResp = await prisma.task.deleteMany()

            // response
            statusCode = 200
            response = {
                "taskCount": dbResp,
                "error": ""
            }
        } catch (error: any) {
            statusCode = 500
            response = {
                "taskCount": {
                    count: 0
                },
                "error": error.message
            }
        }
        
        return {
            statusCode: statusCode,
            body: response
        };
    }
)
