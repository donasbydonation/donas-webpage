import { useRouter } from "next/router"

export default function Send(){
    const router = useRouter();
    const {id} = router.query
    return (
        <div>
            후원받는사람 {id}
            <div>
            후원금액
            <input type="number"></input>
            </div>
            <div>
            후원메세지
            <input type="text"></input>
            </div>
            <button type="submit">후원하기</button>            
        </div>
    )
}