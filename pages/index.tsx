import Header from "../src/components/Header"
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Home() {
    const [userEmail, setUserEmail] = useState('')

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };
    useEffect(() =>{
        setUserEmail((currentValue) => currentValue);
        console.log(userEmail)
    })

    function handleEmailSubmit(e){
        axios.post('http://localhost:8080/api/v1/pre-registrations', {email:userEmail})
        .then(res => {
          console.log(res);
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
    const cssInput = {
        width:"250px",
        height:"50px",
        border:"solid",
        borderRadius:"30px",
        borderColor:"#ff3363",
        fontSize:"20px",
        padding:"2px 2px 2px 20px"
    }
    const cssButton = {
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
                <img src= "/images/donasRendingImages/test1.png" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>

            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/test2.png" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            

            {/* 이메일 등록 */}
            <div style={{display:"flex"}}>
                <div style={{display:"flex", margin:"auto"}}>
                   <input type="email" placeholder="이메일을 입력하세요!" style={cssInput} onChange={handleEmailChange}/>  
                   <div style={{width:"5px"}}></div>
                   <button style={cssButton} onClick={handleEmailSubmit}><span style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>등록하기</span></button>
                </div>
            </div>

            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/rending03.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/rending04.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/rending05.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/rending06.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/rending07.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/rending08.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/rending09.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
        </div>
    );
}