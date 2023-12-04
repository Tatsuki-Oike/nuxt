import { PrismaClient } from '@prisma/client';

type UserType = {
    id: string;
    password: string;
    name: string;
  }

type ResType = {
    statusCode: number;
    body: {
        user: UserType | null;
        error: string;
    }
}

export default defineEventHandler(
    async (event): Promise<ResType> => {

        let statusCode;
        let response;

        try {    

            // POSTデータ取得
            const postData = await readBody(event)

            // db
            const prisma = new PrismaClient();
            const dbResp = await prisma.user.create({
                data: postData
            })

            // response
            statusCode = 200
            response = {
                "user": dbResp,
                "error": ""
            }
        } catch (error: any) {
            statusCode = 500
            response = {
                "user": null,
                "error": error.message
            }
        }
        
        return {
            statusCode: statusCode,
            body: response
        };
    }
)
