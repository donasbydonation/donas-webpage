/**
 * DISCLAIMER
 * This page is no longer maintained since Mar 15, 2023
 * And will be deleted after official home page is released
 */
import BottomBar from "@/src/components/BottomBar";


function Holding(){
    return (
        <div>
            보유도넛 영역입니다.
        </div>
    )
}


function Recent(){
    return (
        <div>
            최근 후원한 사람 영역입니다.
        </div>
    );
}


function Summary(){
    return (
        <div>
            종합내역 영역입니다.
        </div>
    )
}


function CreaterGrowth(){
    return (
        <div>
            크리에이터 성장지표 영역입니다.
        </div>
    );
}


export default function LoginHome(){
    return (
        <div style={{display:"flex"}}>
            <div style={{margin:"auto"}}><h1>내 크리에이터가 얼마나 성장했는지 볼 수 있어야한다.</h1> <h1>ex) 000님의 후원자 수가 이만큼 증가했어요!</h1></div>
            <div style={{margin:"auto"}}>
                <Holding />
                <Recent />
                <Summary />
            </div>
        </div>
    );
}
