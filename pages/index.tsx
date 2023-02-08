import Header from "../src/components/Header"
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Home() {
    const imagePath = '/images/donasRendingImages1200'
    const [userEmail, setUserEmail] = useState('')
    const [isUserEmail, setIsUserEmail] = useState(false)


    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };
    useEffect(() =>{
        const emailRegEx = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        
        if (userEmail.length > 0){
            setUserEmail((currentValue) => currentValue);

            if (!emailRegEx.test(userEmail)){
                setIsUserEmail(false)
            }
            else {
                setIsUserEmail(true)
            }
            console.log(userEmail)
        }
    })

    function handleEmailSubmitFalse(e){
        alert('잘못된 형식의 이메일입니다.')   
    }

    function handleEmailSubmitTrue(e){
        axios.post('http://localhost:8080/api/v1/pre-registrations', {email:userEmail})
        .then(res => {
            const status = res.status
            if (status === 201){
                alert('등록되었습니다.!')   
                setUserEmail('')
            }
        }).catch(ex=>{
            alert('중복된 이메일입니다.')
        })
    }


    const imageMargin = {
        width:"0%",
    }
    const imageWidth = {
        width:"1200px",
        height:"100%",
        overflow:"hidden",
        margin:"auto",
    }
    const inputCss = {
        width:"250px",
        height:"50px",
        border:"solid",
        borderRadius:"30px",
        borderColor:"#ff3363",
        fontSize:"20px",
        padding:"2px 2px 2px 20px",
        margin:"0 5px 0 0 "
    }
    const buttonCss = {
        cursor:"pointer",
        width:"100px",
        height:"60px",
        border:"solid",
        borderRadius:"15px",
        background:"#ff3363",
        color:"#ff3363",
        textAlign:"center",
    }


    return (
        <div>
            <Header />
            <div style={{padding:"10px"}}></div>
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= {imagePath + "/rending01.jpg"} alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>


            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= {imagePath + "/rending02.jpg"} alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            {/* 이메일 등록 */}
            <div style={{display:"flex"}}>
                <div style={{display:"flex", margin:"auto"}}>
                    <input type="email" placeholder="이메일을 입력하세요!" style={inputCss} onChange={handleEmailChange}/>  
                    <button style={buttonCss} onClick={isUserEmail?handleEmailSubmitTrue:handleEmailSubmitFalse}><span style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>등록하기</span></button>
                </div>
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= {imagePath + "/rending03.jpg"} alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= {imagePath + "/rending04.jpg"} alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= {imagePath + "/rending05.jpg"} alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= {imagePath + "/rending07.jpg"} alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= {imagePath + "/rending08.jpg"} alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src="/images/donasRendingImages/rending09.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
        </div>
    );
}