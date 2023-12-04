type ResType = {
    status: string;
    body: {
        [key: string]: any;
    }
}

export default defineEventHandler(
    async (event): Promise<ResType> => {
        const data = await readBody(event)
        const response = {
            status: "SUCCESS",
            body: {
                "data": data
            }
        }
        return response
    }
)