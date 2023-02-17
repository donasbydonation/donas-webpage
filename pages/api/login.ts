// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Cookies } from "react-cookie";

type Data = {
  name: string
}

const cookies = new Cookies();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {    
    axios.post('http://localhost:8080/api/v1/login', {username:req.body.username, password:req.body.password})
    .then(response => {
        const status = response.status
        if (status === 200){
            const [accessToken] = response.data.accessToken;
            const [refreshToken] = response.data.refreshToken;
            cookies.set("AccessToken", accessToken, {
                path: "/",
                secure: true,
                sameSite: "none",
            });
            cookies.set("RefreshToken", refreshToken, {
                path: "/",
                secure: true,
                sameSite: "none",
            });               
            res.status(200).json({ name: 'John Doe' })
        }
    }).catch(ex=>{
        res.status(ex.response.status).json({ name: 'John Doe' })
    })
}
