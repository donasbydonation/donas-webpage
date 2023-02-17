import Link from "next/link";
import styles from '@/styles/auth/login.module.css';
import { useEffect, useState, ChangeEvent, FormEvent} from "react";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";
import axios from 'axios'


const cookies = new Cookies();


export const setCookie = (name: string, value: string, option?: any) => {
    return cookies.set(name, value, { ...option})
}


export const getCookie = (name: string) => {
    return cookies.get(name)
}


export default function Login(){
    const router = useRouter();
    const accessTokenExpires = new Date();
    const refreshTokenExpires = new Date();

    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')

    const [isUserId, setIsUserId] = useState(false)
    const [isUserPw, setIsUserPw] = useState(false)


    // onChange Method
    const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    };
    useEffect(() =>{
        if (userId.length > 0){
            setUserId((currentValue) => currentValue);
            console.log(userId)
        }
    })
    

    const handlePwChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPw(e.target.value);
    };
    useEffect(() =>{
        if (userPw.length > 0){
            setUserPw((currentValue) => currentValue);
            console.log(userPw)
        }
    })
    

    function handleOnSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        axios.post('http://localhost:8080/api/v1/login', {username:userId, password:userPw})
        .then(res => {
            const status = res.status
            if (status === 200){
                const [accessToken] = res.data.accessToken;
                const [refreshToken] = res.data.refreshToken;
                accessTokenExpires.setFullYear(accessTokenExpires.getFullYear() + 1);
                refreshTokenExpires.setFullYear(refreshTokenExpires.getFullYear() + 10);
                cookies.set("AccessToken", accessToken, {
                    path: "/",
                    secure: true,
                    sameSite: "none",
                    expires:accessTokenExpires
                });
                cookies.set("RefreshToken", refreshToken, {
                    path: "/",
                    secure: true,
                    sameSite: "none",
                    expires:refreshTokenExpires
                });                
                router.replace("/home");
            }
        }).catch(ex=>{
            alert('아이디 또는 비밀번호를 확인해주세요.')
        })
    }


    function handleOnSubmitNextAPI(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        axios.post('http://localhost:3000/api/login', {username:userId, password:userPw})
        .then(res => {
            const status = res.status
            console.log(status)
            console.log(res.data)
            if (status === 200){
                console.log(res.data)
            }
        }).catch(ex=>{
            alert('아이디 또는 비밀번호를 확인해주세요.')
        })
    }


    return  (
        <div className={styles.box}>
            <div style={{display:"flex"}}>
                <div className={styles.sidebox_pink}></div>
                <span className={styles.span}>로그인</span>
            </div>

            <form style={{display:"flex"}} className={styles.input} onSubmit={handleOnSubmit} method='POST'>       
                <div>
                    <div><input type="text" placeholder="id" name="id" value={userId} onChange={handleIdChange}></input></div>
                    <div><input type="password" placeholder="password" name="pw" value={userPw} onChange={handlePwChange}></input></div>
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