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
        
        // throw createError("サーバーの処理中にERROR")

        let statusCode;
        let response;

        try {    

            // throw createError("データベースの処理中にERROR")

            // 1秒待つ
            const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
            await delay(1000);

            // POSTデータ取得
            const postData = await readBody(event)

            // db
            const prisma = new PrismaClient();
            const dbResp = await prisma.task.create({
                data: postData
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
