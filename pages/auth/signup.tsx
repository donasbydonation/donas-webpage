import { useEffect, useState, ChangeEvent } from 'react';
import styles from '@/styles/auth/signup.module.css'
import axios from 'axios'
import { useRouter } from "next/router";

export default function Signup() {
    // Router
    const router = useRouter();

    // State
    // 입력 유효성 상태
    const [isId, setIsId] = useState(false)
    const [isPw1, setIsPw1] = useState(false)
    const [isPw2, setIsPw2] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isSendAuthCode, setIsSendAuthCode] = useState(false)
    const [isCheckAuthCode, setIsCheckAuthCode] = useState(false)
    const [isCheckDuplication, setIsCheckDuplication] = useState(false)
    
    // 입력 내용 상태
    const [inputId, setInputId] = useState('')
    const [inputPw1, setInputPw1] = useState('')
    const [inputPw2, setInputPw2] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputAuthCode, setInputAuthCode] = useState('')

    // 안내 문구 상태  
    const [idMessage, setIdMessage] = useState('')
    const [duplicationMessage, setDuplicationMessage] = useState('')
    const [pw1Message, setPw1Message] = useState('')
    const [pw2Message, setPw2Message] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [sendAuthMessage, setSendAuthMessage] = useState('인증코드 전송')

    // 이메일 인증시 필요한 상태
    const [certificationId, setCertificationId] = useState()
    const [expiredDate, setExpiredDate] = useState()


    // onChange Method
    const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputId(e.target.value)
        setIsCheckDuplication(false)
    };
    useEffect(() =>{
        const idRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,12}$/;

        if (inputId.length > 0){
            setInputId((currentValue) => currentValue)
            if (idRegEx.test(inputId)) {       
                setIsId(true)
                setIdMessage("아이디 형식에 맞습니다.");
            } 
            else {              
                setIsId(false)
                setIdMessage("아이디 형식에 맞지 않습니다.");
            
            }
        }
    })
    

    const handlePw1Change = (e: ChangeEvent<HTMLInputElement>) => {
        setInputPw1(e.target.value);
    };
    useEffect(() =>{
        const pwRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^])(?=.*[0-9]).{4,12}$/;
        
        if (inputPw1.length > 0){
            setInputPw1((currentValue) => currentValue);

            if (pwRegEx.test(inputPw1)) {
                setIsPw1(true)
                setPw1Message("비밀번호 형식에 맞습니다.");
            } 
            else {
                setIsPw1(false)
                setPw1Message("비밀번호 형식에 맞지 않습니다.");
            
            }
        }
    })

    
    const handlePw2Change = (e: ChangeEvent<HTMLInputElement>) => {
        setInputPw2(e.target.value);
    };
    useEffect(() =>{
        if (inputPw2.length > 0){
            setInputPw2((currentValue) => currentValue);

            if (inputPw1 == inputPw2) {
                setIsPw2(true)
                setPw2Message("비밀번호가 일치합니다.");
            } 
            else {
                setIsPw2(false)
                setPw2Message("비밀번호가 틀립니다.");
            }
        }
    })
    

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputEmail(e.target.value);
    };
    useEffect(() =>{
        const emailRegEx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        
        if (inputEmail.length > 0){
            setInputEmail((currentValue) => currentValue);

            if (emailRegEx.test(inputEmail)){
                setIsEmail(true)
            }
            else{
                setIsEmail(false)
            }
        }
    })
    

    const handleAuthCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputAuthCode(e.target.value);
    };
    useEffect(() =>{
        setInputAuthCode((currentValue) => currentValue);
        console.log(inputAuthCode)
    })
      

    // onClick Method
    // 아이디 중복 검사 버튼 핸들러
    function handleDuplicationCheckButton(){
        axios.get('http://localhost:8080/api/v1/username?value='+inputId)
        .then(res => {
            const status = res.status
            if (status === 204){
                setIsCheckDuplication(true)
                alert('사용 가능한 아이디입니다.')
                setDuplicationMessage('사용 가능한 아이디입니다.')
            }
        }).catch(ex=>{
            setIsCheckDuplication(false)
            alert('중복된 아이디입니다.')
            setDuplicationMessage('중복된 아이디입니다.')
        })
    }


    // 인증코드 이메일 전송 버튼 핸들러
    function handleSendAuthCodeButton(){
        if (isEmail === true){
            axios.post('http://localhost:8080/api/v1/email-certificates', {email:inputEmail})
            .then(res => {
                const status = res.status
                const data = res.data
                if (status === 200){
                    setIsSendAuthCode(true)
                    setCertificationId(data.certificationId)
                    setExpiredDate(data.expiredDate)
                    setSendAuthMessage('재전송')
                }
            }).catch(ex=>{
                alert('이미 등록된 이메일입니다.')
            })
        }
        else {
            alert('이메일 형식을 확인해주세요.')
        }
    }


    // 인증코드 인증 버튼 핸들러
    function handleCheckAuthCodeButton(){
        axios.put('http://localhost:8080/api/v1/email-certificates', {id:certificationId, authenticationKey:inputAuthCode})
        .then(res => {
            const status = res.status
            const data = res.data
            if (status === 200){
                setIsCheckAuthCode(true)
                alert('인증되었습니다.')
            }
        }).catch(ex=>{
            alert(ex.response.data.message)
        })
    }


    // 회원가입 버튼 핸들러
    function handleJoinButton(){
        console.log(isId, isPw1, isPw2, isCheckAuthCode, isCheckDuplication)
        if (isId === true && isPw1 === true && isPw2 === true && isCheckAuthCode === true && isCheckDuplication === true){
            axios.post('http://localhost:8080/api/v1/signup', {username:inputId, password:inputPw1, email:inputEmail, nickname:'송영운'})
            .then(res => {
                console.log(res)
                const status = res.status
                const data = res.data
                if (status === 200){
                    setIsCheckAuthCode(true)
                    alert('환영합니다! 정상적으로 가입 되었습니다!')
                    router.replace("/auth/login")
                }
            }).catch(ex=>{
                alert(ex.response.data.message)
            })
        }
    }


    // Component
    function SendAuthTimer(){
        if (isSendAuthCode === true){
            return (
                <div>
                    <div>timer 영역입니다.</div>
                    <div>10분 내에 인증하세요.</div>
                </div>
            );
        }
        else {
            return null
        }
    }

    
    return (
      <div>
          <div className={styles.box}>
              <div style={{display:"flex"}}>
                  <div className={styles.sidebox_pink}></div>
                  <span className={styles.span}>
                      회원가입
                  </span>
              </div>

              <div> 
                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>아이디</span>
                      <div>
                          <div><input type="text" name="id" value={inputId} onChange={handleIdChange} placeholder="4~12자의 영문 대소문자 및 숫자 조합"/></div>
                          {isCheckDuplication? duplicationMessage:idMessage}
                      </div>
                      <button onClick={handleDuplicationCheckButton}>중복확인</button>
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>비밀번호</span>
                      <div>
                          <div><input type="password" name="pw1" value={inputPw1} onChange={handlePw1Change} placeholder="4~12자의 영문 대소문자, 숫자, 특수문자 조합"/></div>
                          {pw1Message}
                      </div>
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>비밀번호 확인</span>
                      <div>
                          <div><input type="password" name="pw2" value={inputPw2} onChange={handlePw2Change}/></div>
                          {pw2Message}
                      </div>
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>이메일</span>
                      <div>
                          <input type="email" name="email" value={inputEmail} onChange={handleEmailChange} placeholder="test@donas.com"/>
                          {emailMessage}
                      </div>
                      <button onClick={handleSendAuthCodeButton}>{sendAuthMessage}</button>
                      <SendAuthTimer />
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>인증코드</span>
                      <input type="text" name="authcode" value={inputAuthCode} onChange={handleAuthCodeChange}/>
                      <button onClick={handleCheckAuthCodeButton}>인증</button>
                  </div>

                  <div className={styles.input}>
                      <button onClick={handleJoinButton}>가입</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
