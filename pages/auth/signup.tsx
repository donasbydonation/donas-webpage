import { useState } from 'react';
import styles from '@/styles/signup.module.css'

function DuplicationText(){
  const [duplication, setDuplication] = useState(false)
  if (duplication === false){
    return
  }
  else {
    return (
      <span>사용 가능한 아이디입니다.</span>
    );
  }
}

export default function Signup() {
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
                          <div><input type="text" /></div>
                          <div><DuplicationText /></div>
                      </div>
                      <button>중복확인</button>
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>비밀번호</span>
                      <input type="text" />
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>비밀번호 확인</span>
                      <input type="text" />
                  </div>

                  <div style={{display:"flex"}} className={styles.input}>
                      <span className={styles.subtext}>이메일</span>
                      <input type="email" />
                  </div>

                  <div className={styles.input}>
                      <button>가입하기</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
  