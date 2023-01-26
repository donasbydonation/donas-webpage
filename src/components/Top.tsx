import Link from "next/link";

export default function Top(){
    return (
        <div style={{display:"flex", margin:"30px 0 0 420px"}}>
            <div style={{flex:"100px 0 0"}}>
                <img src= "/images/logo.png" alt="logo" style={{display:"block", width:80}}/>
            </div>
            <div>
                <h1>Donas</h1>
            </div>
            <div style={{margin:"10px 0 0 800px"}}>
            <Link href="/auth/login">
                <button style={{
                                cursor:"pointer",
                                width:"110px",
                                height:"45px",
                                textAlign:"center",
                                background:"white",
                                borderRadius:"30px",
                                fontSize:"18px",
                                fontWeight:"bold",
                                backgroundColor:"#fffff",
                                border: "2px solid #ff3363",
                                color:"#ff3363"
                                }}>
                        로그인
                </button>
            </Link>
            </div>
        </div>
    );
}