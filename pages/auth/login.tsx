import Link from "next/link";

export default function Login(){
    return (
        <div>
            <div style={{display:"flex"}}>       
                <div>
                <p><input type="text" placeholder="id"></input></p>
                <p><input type="text" placeholder="password"></input></p>
                </div>
                <Link href="/home"><button type="submit">login</button></Link>
            </div>
            <div>
                <Link href="/auth/findid">아이디찾기</Link>
                <Link href="/auth/findpw">비밀번호찾기</Link>
                <Link href="/auth/signup">회원가입</Link>
            </div>
        </div>
    );
}