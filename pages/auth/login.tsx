import Link from "next/link";
import styles from '@/styles/auth/login.module.css'

export default function Login(){
    return (
        <div className={styles.box}>
            <div style={{display:"flex"}}>
                <div className={styles.sidebox_pink}></div>
                <span className={styles.span}>로그인</span>
            </div>

            <div style={{display:"flex"}} className={styles.input}>       
                <div>
                    <div><input type="text" placeholder="id"></input></div>
                    <div><input type="text" placeholder="password"></input></div>
                </div>
                <Link href="/home"><button type="submit">login</button></Link>
            </div>

            <div style={{display:"flex", margin:"10px 0 0 100px"}}>
                <div className={styles.link}><Link href="/auth/findid">아이디찾기</Link></div>
                <div className={styles.link}><Link href="/auth/findpw">비밀번호찾기</Link></div>
                <div className={styles.link}><Link href="/auth/signup">회원가입</Link></div>
            </div>
        </div>
    );
}