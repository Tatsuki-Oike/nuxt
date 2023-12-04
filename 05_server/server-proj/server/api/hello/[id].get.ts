type ResType = {
    status: string;
    body: {
        [key: string]: any;
    }
}

export default defineEventHandler(
    (event): ResType => {
        const query = getQuery(event)
        const params = event.context.params
        const response = {
            status: "SUCCESS",
            body: {
                "query": query,
                "params": params
            }
        }
        return response
    }
)