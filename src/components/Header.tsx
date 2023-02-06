import Link from "next/link";

export default function Header(){
    const header = {
        position:"fixed",
        display:"flex",
        margin:"auto",
        top:0,
        left:0,
        background:"#E6E6E6",
        width:"100%", 
        height:"60px"
    }

    const button = {
        cursor:"pointer",
        width:"100px",
        height:"60px",
        textAlign:"center",
        background:"#E6E6E6",
        fontSize:"18px",
        fontWeight:"bold",
        backgroundColor:"#fffff",
        border: "2px ",
    }
    return (
        <div style={header}>
            <div style={{width:"15%"}}></div>
            <img src= "/images/logo.png" alt="logo" style={{display:"block", width:"200px"}}/>
            
            <div style={{width:"60%"}}></div>
            
            <Link href="/auth/login">
                <button style={button}>공지사항</button>
            </Link>

            <Link href="/auth/login">
                <button style={button}>고객센터</button>
            </Link>

            <Link href="/auth/login">
                <button style={button}>로그인</button>
            </Link>

            <div style={{width:"15%"}}></div>
        </div>
    );
}