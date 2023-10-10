import type {NextApiRequest,NextApiResponse} from "next";

export default function healthcheck(_: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({status: "OK"})
}