import BottomBar from "@/src/components/BottomBar";

function Profile(){
    return (
        <div>
            프로필 영역입니다.
        </div>
    );
}

function Holding(){
    return (
        <div>
            보유도넛 영역입니다.
        </div>
    )
}

function Summary(){
    return (
        <div>
            종합내역 영역입니다.
        </div>
    )
}

export default function LoginHome(){
    return (
        <div>
            홈입니다.
            <Profile></Profile>
            <Holding></Holding>
            <Summary></Summary>
            <BottomBar></BottomBar>
        </div>
    );
}