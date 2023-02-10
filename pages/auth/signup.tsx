import { useEffect, useState, ChangeEvent } from 'react';
import styles from '@/styles/auth/signup.module.css'

export default function Signup() {
    const [isCheckDuplication, setIsCheckDuplication] = useState(false)
    const [isSendAuth, setIsSendAuth] = useState(false)
    const [isAuth, setIsAuth] = useState(false)
    const [isId, setIsId] = useState(false)
    const [isPw1, setIsPw1] = useState(false)
    const [isPw2, setIsPw2] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isAuthcode, setIsAuthcode] = useState(false)

    const [idMessage, setIdMessage] = useState('')
    const [duplicationMessage, setDuplicationMessage] = useState('')
    const [pw1Message, setPw1Message] = useState('')
    const [pw2Message, setPw2Message] = useState('')
    const [emailMessage, setEmailMessage] = useState('')
    const [sendAuthMessage, setSendAuthMessage] = useState('인증코드 전송')

    const [id, setId] = useState('')
    const [pw1, setPw1] = useState('')
    const [pw2, setPw2] = useState('')
    const [email, setEmail] = useState('')
    const [authcode, setAuthcode] = useState('')
   

    // onChange Method
    const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(e.target.value);
        setIsCheckDuplication(false)
    };
    useEffect(() =>{
        const idRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,12}$/;

        if (id.length > 0){
            setId((currentValue) => currentValue);

            if (!idRegEx.test(id)) {
                setIdMessage("아이디 형식에 맞지 않습니다.");
            } 
            else {
                setIdMessage("아이디 형식에 맞습니다.");
            }
        }
    })
    

    const handlePw1Change = (e: ChangeEvent<HTMLInputElement>) => {
        setPw1(e.target.value);
    };
    useEffect(() =>{
        const pwRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^])(?=.*[0-9]).{4,12}$/;
        if (pw1.length > 0){
            setPw1((currentValue) => currentValue);

            if (!pwRegEx.test(pw1)) {
                setPw1Message("비밀번호 형식에 맞지 않습니다.");
            } 
            else {
                setPw1Message("비밀번호 형식에 맞습니다.");
            }
        }
    })

    
    const handlePw2Change = (e: ChangeEvent<HTMLInputElement>) => {
        setPw2(e.target.value);
    };
    useEffect(() =>{
        if (pw2.length > 0){
            setPw2((currentValue) => currentValue);

            if (pw1 !== pw2) {
                setPw2Message("비밀번호가 틀립니다.");
            } 
            else {
                setPw2Message("비밀번호가 일치합니다.");
            }
        }
    })
    

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    useEffect(() =>{
        setEmail((currentValue) => currentValue);
        console.log(email)
    })
    

    const handleAuthcodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthcode(e.target.value);
    };
    useEffect(() =>{
        setAuthcode((currentValue) => currentValue);
        console.log(authcode)
    })
      

    // onClick Method
    function handleDuplicationClick(){
        setIsCheckDuplication(true)
        setDuplicationMessage('사용 가능한 아이디입니다.')
    }


    function handleSendAuthClick(){
        if (isSendAuth === true){
            setSendAuthMessage('다시 전송')
        }
        else {
            setIsSendAuth(true)
        }
    }


    function handleAuthClick(){

    }


    function handleJoinClick(){

    }


    // Component
    function SendAuthTimer(){
        if (isSendAuth === true){
            return (
                <div>timer 영역입니다.</div>
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
                          <div><input type="text" name="id" value={id} onChange={handleIdChange} placeholder="4~12자의 영문 대소문자 및 숫자 조합"/></div>
                          {isCheckDuplication? duplicationMessage:idMessage}
                      </div>
                      <button onClick={handleDuplicationClick}>중복확인</button>
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>비밀번호</span>
                      <div>
                          <div><input type="text" name="pw1" value={pw1} onChange={handlePw1Change} placeholder="4~12자의 영문 대소문자, 숫자, 특수문자 조합"/></div>
                          {pw1Message}
                      </div>
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>비밀번호 확인</span>
                      <div>
                          <div><input type="text" name="pw2" value={pw2} onChange={handlePw2Change}/></div>
                          {pw2Message}
                      </div>
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>이메일</span>
                      <div>
                          <input type="email" name="email" value={email} onChange={handleEmailChange} placeholder="test@donas.com"/>
                          {emailMessage}
                      </div>
                      <button onClick={handleSendAuthClick}>{sendAuthMessage}</button>
                      <SendAuthTimer />
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>인증코드</span>
                      <input type="text" name="authcode" value={authcode} onChange={handleAuthcodeChange}/>
                      <button onClick={handleAuthClick}>인증</button>
                  </div>

                  <div className={styles.input}>
                      <button onClick={handleJoinClick}>가입</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  
