import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid'

type UserType = {
    id: string;
    password: string;
    name: string;
    token?: string | null;
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
            const user = await prisma.user.findFirst({
                where: {
                  id: postData.id
                },
              });

            if(user){
                if(
                    user.id === postData.id &&
                    user.password === postData.password
                  ){
                        user["token"] = uuidv4()
                    }
            }

            // response
            statusCode = 200
            response = {
                "user": user,
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
