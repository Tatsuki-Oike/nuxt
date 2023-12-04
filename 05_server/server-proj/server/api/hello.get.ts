type ResType = {
    status: string;
    body: {
        [key: string]: any;
    }
}

export default defineEventHandler(
    (event): ResType => {
        const query = getQuery(event)
        const response = {
            status: "SUCCESS",
            body: {
                "query": query
            }
        }
        return response
    }
)