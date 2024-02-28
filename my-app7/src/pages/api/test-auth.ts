import { getSession } from "next-auth/react"

const handler = async (req: any, res: any) =>
{
    const session = await getSession(req);

    if (!session)
    {
        return res.status(401).json({error: "An Unauthorized user!"});
    }

    return res.status(200).json({message: "Success!", session});
}

export default handler;