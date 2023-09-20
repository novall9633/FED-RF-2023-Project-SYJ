const liveData=[
    {ballName:"ATLAS",bImg:"16",img:"c",color:"Purple•Teal•Navy",info:"ATLAS만의 새롭게 디자인된 코어와<br>Heavy Oil에서도 힘을 잃지 않는 Formula 1 Solid 커버의 조합",getNum:1},
    {ballName:"ENVY TOUR PEARL",bImg:"14",img:"h",color:"Chrome",info:"최상과 최상의 만남<br>Obsession Tour 코어와 HK22-Envy Pearl 커버",getNum:2},
    {ballName:"BW LEGEND SOLID",bImg:"15",img:"h",color:"Black",info:"강력한 힘을 가진 Envy Solid CFI+ 커버와<br>증명된 Gas Mask 코어의 결합",getNum:3},
    {ballName:"THE C-9 KNIT BOA",bImg:"13",img:"d",color:"Black•Blue",info:"고급 니트 소재의 포근한 착화감<br>유니크한 디자인의 최고급 볼링화",getNum:0}
]

const center = {
    일산:{img:'ilsan',eName:"ILSAN, GOYANG CITY",hInfo:"넓은 매장과 KPBA 및 국가대표 선수들이 상주하는 최고 시설의 볼링센터",bInfo:"국내 최고 시설을 보유하고있는 엠케이 볼링센터 일산점입니다. 각종 최신 시설을 완비하고 있으며, 현 KPBA 및 국가대표 선수들이 상시 상주하고 있습니다. 밤 12시부터 음악과 조명, 그리고 볼링이 어우러진 락볼링을 즐길 수 있습니다."},
    야당:{img:'yadang',eName:"YADANG, PAJU CITY",hInfo:"KPBA 및 국가대표 선수들이 상주하는 깔끔하고 밝은 분위기의 최고시설 볼링센터",bInfo:"낮에는 정갈함과 저녁에는 밝은 분위기의 락볼링장으로 변하는 엠케이 볼링센터 야당점입니다. 각종 최신 시설을 완비하고 있으며, 현 KPBA 및 국가대표 선수들이 상시 상주하고 있습니다. 밤 12시부터 음악과 조명, 그리고 볼링이 어우러진 락볼링을 즐길 수 있습니다."},
    구래:{img:'gurae',eName:"GURAE, KIMPO CITY",hInfo:"아늑한 분위기와 KPBA 및 국가대표 선수들이 상주하는 최고 시설의 볼링센터",bInfo:"모던하며 아늑한 분위기의 넓은 매장을 갖춘 국내 최고 시설을 보유하고있는 엠케이 볼링센터 구래점입니다. 현 KPBA 및 국가대표 선수들이 상시 상주하고 있습니다. 밤 12시부터 음악과 조명, 그리고 볼링이 어우러진 락볼링을 즐길 수 있습니다."},
    구로:{img:'guro',eName:"GURO, SEOUL CITY",hInfo:"다양한 즐길거리와 KPBA 및 국가대표 선수들이 상주하는 최고 시설의 볼링센터",bInfo:"국내 최고 시설을 보유하고있는 엠케이 볼링센터 구로점입니다. 각종 최신 시설을 완비하고 있으며, 현 KPBA 및 국가대표 선수들이 상시 상주하고 있습니다. 밤 10시부터 음악과 조명, 그리고 볼링이 어우러진 락볼링을 즐길 수 있습니다."},
}

const subMenu={
    회사소개:["인사말","주요연혁","조직구성","본사 오시는길"],
    제품소개:["볼링 볼","볼링 슈즈","볼링 가방","볼링아대","볼링의류","볼링 악세사리","볼링장 제품"],
    STAFF:["메인 스텝","용품 스텝","실업대표 스텝","브랜드별 스텝"],
    대회안내:["대회 안내","대회 신청","대회 결과"],
    볼링센터:["MK직영점","볼링장·프로샵"],
    고객센터:["공지사항","FAQ","1:1문의"],
}
const product=[
    {ballName:'DARK WEB HYBRID',img:'DarkWeb',getNum:4},
    {ballName:'CUDA POWERCOR PEARL',img:'Cuda',getNum:5},
    {ballName:'MAGENTA URETHANE',img:'Margenta',getNum:6},
    {ballName:'PURPLE SOLID REACTIVE',img:'Purple',getNum:7},
    {ballName:'3-D OFFSET BLACK SOLID',img:'Offset',getNum:8},
]



const subData={
    1:{imgct:4,Name:'ATLAS',kName:'아틀라스',cName:'콜롬비아300',cl:'Purple / Teal / Navy',cr:'Atlas',rg:'13#2.597/14#.2.542/15#2.520/16#2.530',df:'13#.041/14#.054/15#.054/16#.047',cs:'Formula 1 Solid',fs:'500, 2000 Siaair Micro Pad'},
    2:{imgct:4,Name:'ENVY TOUR PEARL',kName:'엔비 투어',cName:'햄머',cl:'Chrome',cr:'Obsession Tour',rg:'13#2.597/14#2.485/15#2.469/16#2.484',df:'13#.041/14#.034/15#.034/16#.029',cs:'HK22 - Envy Pearl',fs:'500, 1000, 1500 Siaair / Factory Compound'},
    3:{imgct:3,Name:'BLACK WIDOW LEGEND SOLID',kName:'블랙 위도우 레전드 솔리드',cName:'햄머',cl:'Black',cr:'Gas Mask',rg:'13#2.56/14#2.50/15#2.50/16#2.51',df:'13#.030/14#.056/15#.058/16#.048',cs:'Envy Solid CFI+',fs:'500, 2000 Micro Pad'},
    4:{imgct:4,Name:'DARK WEB HYBRID',kName:'다크 웹 하이브리드',cName:'햄머',cl:'Blue / Purple / Black',cr:'Modified Spheroid',rg:'13#2.585/14#2.541/15#2.514/16#2.522',df:'13#.040/14#.048/15#.048/16#.042',cs:'HK22 - Aggression Hybrid',fs:'500, 1000, 2000 Siaair Micro Pad'},
    5:{imgct:4,Name:'CUDA POWERCOR PEARL',kName:'쿠다 파워코어 펄',cName:'콜롬비아300',cl:'Maroon / Black',cr:'Cuda PowerCOR',rg:'13#2.582/14#.2.532/15#2.501/16#2.51',df:'13#.042/14#.047/15#.047/16#.041',cs:'HK22 - ERT Pearl',fs:'500, 1000, 1500 Siaair / Factory Compound'},
    6:{imgct:5,Name:'MAGENTA URETHANE',kName:'마젠타 우레탄',cName:'햄머',cl:'Magenta',cr:'LED',rg:'13#2.631/14#2.680/15#2.650',df:'13#.020/14#.013/15#.015',cs:'Urethane',fs:'500, 1000, 1500 Grit'},
    7:{imgct:4,Name:'PURPLE PEARL URETHANE',kName:'퍼플 펄 우레탄',cName:'햄머',cl:'Purple Pearl',cr:'LED',rg:'15#2.65/14#2.68',df:'15#.013/14#.013',cs:'Urethane Pearl',fs:'500,1000,2000 Siaair Micro Pad'},
    8:{imgct:3,Name:'3-D OFFSET BLACK SOLID',kName:'쓰리디 옵셋 블랙 솔리드',cName:'햄머',cl:'Black Solid',cr:'High Rev Offset',rg:'14#2.505/15#2.489/16#2.501',df:'14#.053/15#.053/16#.046',cs:'Neoflex 25',fs:'500-1000-2000 Siaair'},
}
export {liveData, center, subMenu, product, subData};