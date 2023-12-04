import { PrismaClient } from '@prisma/client';

type ResponseUserType = {
    id: string;
    name: string;
  }

type ResType = {
    statusCode: number;
    body: {
        userList: ResponseUserType[];
        error: string;
    }
}

export default defineEventHandler(
    async (): Promise<ResType> => {

        let statusCode;
        let response;

        try {

            // db
            const prisma = new PrismaClient();            
            const dbResp = await prisma.user.findMany({
                select: {
                    id: true,
                    name: true,
                  },
            })

            // response
            statusCode = 200
            response = {
                "userList": dbResp,
                "error": ""
                }  
        } catch (error: any) {
            statusCode = 500
            response = {
                "userList": [],
                "error": error.message
            }
        }
        
        return {
            statusCode: statusCode,
            body: response
        };
    }
)
