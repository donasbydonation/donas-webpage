import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/index.module.css'

export default function Home() {
  return (
    <div style={{position: "relative"}}>
        <span className={styles.intro}>좋아하는 크리에이터가 있으신가요?</span>

        <div style={{position: "absolute", display:"flex", margin:"0 0 0 580px"}}>
            <div className={styles.box}>
                <div style={{display:"flex"}}>
                    <div className={styles.sidebox_pink}></div>
                    <span className={styles.span}>
                        크리에이터님
                    </span>
                </div>
                <div>
                    <div><span className={styles.subtext}>이제, 더 많은 사람들에게</span></div>
                    <div><span className={styles.subtext}>후원받고 성장해보세요!</span></div>
                </div>
                <div className={styles.iconbox}>
                    <img src="images/fire/fire.png" srcset="images/fire/fire@2x.png 2x, images/fire/fire@3x.png 3x" className={styles.icon}></img>
                </div>
            </div>

            <div className={styles.box}>
                <div style={{display:"flex"}}>
                    <div className={styles.sidebox_yellow}></div>
                    <span className={styles.span}>
                        후원자님
                    </span>
                </div>
                <div>
                    <div><span className={styles.subtext}>많은 사람에게 후원하고</span></div>
                    <div><span className={styles.subtext}>성장의 기쁨을 응원하세요!</span></div>
                </div>
                <div className={styles.iconbox}>
                    <img src="images/gift/gift.png" srcset="images/gift/gift@2x.png 2x, images/gift/gift@3x.png 3x" className={styles.icon}></img>
                </div>
            </div>
        </div>

        <div style={{position: "absolute"}}>
            <img src="images/orbit/orbit.png" srcset="images/orbit/orbit@2x.png 2x, images/orbit/orbit@3x.png 3x" className={styles.orbit}></img>        
        </div>
    </div>
  );
}
