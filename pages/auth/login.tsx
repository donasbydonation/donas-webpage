import Link from "next/link";
import styles from '@/styles/auth/login.module.css'
import { useEffect, useState } from "react";

export default function Login(){
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const [isId, setIsId] = useState(false)
    const [isPw, setIsPw] = useState(false)

    // onChange Method
    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    useEffect(() =>{
        if (id.length > 0){
            setId((currentValue) => currentValue);
            console.log(id)
        }
    })
    

    const handlePwChange = (e) => {
        setPw(e.target.value);
    };
    useEffect(() =>{
        if (pw.length > 0){
            setPw((currentValue) => currentValue);
            console.log(pw)
        }
    })
    

    function handleOnSubmit(){
        console.log('dk');
    }


    return  (
        <div className={styles.box}>
            <div style={{display:"flex"}}>
                <div className={styles.sidebox_pink}></div>
                <span className={styles.span}>로그인</span>
            </div>

            <form style={{display:"flex"}} className={styles.input}>       
                <div>
                    <div><input type="text" placeholder="id" name="id" value={id} onChange={handleIdChange}></input></div>
                    <div><input type="password" placeholder="password" name="pw" value={pw} onChange={handlePwChange}></input></div>
                </div>
                <button type="submit">login</button>
            </form>

            <div style={{display:"flex", margin:"10px 0 0 100px"}}>
                <div className={styles.link}><Link href="/auth/findid">아이디찾기</Link></div>
                <div className={styles.link}><Link href="/auth/findpw">비밀번호찾기</Link></div>
                <div className={styles.link}><Link href="/auth/signup">회원가입</Link></div>
            </div>
        </div>
    );
}