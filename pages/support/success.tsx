export default function Success(){
    function History(){
        return (
            <div>
                후원대상 영역입니다.
            </div>
        );
    }
    
    return (
        <div style={{backgroundColor:"#f8f8f8"}}>
            <div style={{width:"450px", height:"100vh", backgroundColor:"#f8f8f8", textAlign:"center", margin:"auto"}}>
                
                <div style={{margin:"10px"}}>
                    <div style={{textAlign:"center", margin:"auto", width:"50px", height:"50px", borderRadius:"50px", borderWidth:"5px", borderColor:"black", backgroundColor:"black"}}>
                        dks
                    </div>
                    <h3>후원 완료</h3>
                    <div><span>크리에이터에게 후원이 완료되었어요.</span></div>
                    <div><span>마음에 드는 크리에이터에게 마음을 전해보세요!</span></div>
                </div>
                
                <History />
                
                <button style={{textAlign:"center", margin:"auto", width:"95%", height:"50px", borderRadius:"10px", borderWidth:"3px", borderColor:"black", backgroundColor:"black", fontStyle:"", fontSize:"20px", fontWeight:"bold", color:"white"}}>홈으로 가기</button>
            
            </div>
        </div>
    );
}