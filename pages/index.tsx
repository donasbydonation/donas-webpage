import Header from "../src/components/Header"

export default function Home() {
//    const [innerWidth, setInnerWidth] = window.innerWidth
    const imageMargin = {
        width:"0%"
    }
    const imageWidth = {
        maxWidth:"200%",
        width:"200%",
        height:"100%",
        overflow:"hidden",
    }
    const cssInput = {
        width:"250px",
        height:"50px",
        border:"solid",
        borderRadius:"25px",
        borderColor:"#ff3363",
        fontSize:"20px",
        padding:"2px 2px 2px 10px"
    }
    const cssButton = {
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
            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/rending01.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>

            <div style={{display:"flex"}}>
                <div style={imageMargin}></div>
                <img src= "/images/donasRendingImages/rending02.jpg" alt="" style={imageWidth}/>
                <div style={imageMargin}></div>           
            </div>
            

            {/* 이메일 등록 */}
            <div style={{display:"flex"}}>
                <div style={{display:"flex", margin:"auto"}}>
                   <input type="email" placeholder="이메일을 입력하세요!" style={cssInput}/>  
                   <div style={{width:"5px"}}></div>
                   <button style={cssButton}><span style={{color:"white", fontSize:"20px", fontWeight:"bold"}}>등록하기</span></button>
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