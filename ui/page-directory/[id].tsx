/**
 * DISCLAIMER
 * This page is no longer maintained since Mar 15, 2023
 * And will be deleted after official home page is released
 */
import { useRouter } from "next/router"

export default function Send(){
    const router = useRouter();
    const {id} = router.query;

    function Holding(){
        return (
            <div>
                후원대상 영역입니다.
            </div>
        );
    }
    
    return (
        <div style={{backgroundColor:"#f8f8f8"}}>
            <div style={{width:"450px", height:"100vh", backgroundColor:"#f8f8f8", textAlign:"center", margin:"auto"}}>
                    <Holding />

                    <div style={{textAlign:"left"}}>
                        <span>후원금액</span>
                        <div style={{textAlign:"center", width:"95%", height:"80px", margin:"auto"}}>
                            <input type="number" style={{width:"100%", height:"50%", margin:"5px"}}></input>
                            <div style={{textAlign:"right"}}>
                                <button>+1개</button>
                                <button>+10개</button>
                                <button>+100개</button>
                                <button>+1000개</button>
                            </div>
                        </div>
                    </div>

                    <div style={{textAlign:"left"}}>
                        <span>후원메세지</span>
                        <div style={{textAlign:"center", width:"95%", height:"300px", margin:"auto"}}>
                            <input type="text" style={{width:"100%", height:"100%", margin:"5px"}}></input>
                        </div>
                    </div>

                    <div style={{margin:"30px"}}></div>

                    <button type="submit" style={{textAlign:"center", margin:"auto", width:"95%", height:"50px", borderRadius:"10px", borderWidth:"3px", borderColor:"#FF3363", backgroundColor:"#FF3363", fontStyle:"", fontSize:"20px", fontWeight:"bold", color:"white"}}>후원하기</button>            
            </div>
        </div>
    )
}
