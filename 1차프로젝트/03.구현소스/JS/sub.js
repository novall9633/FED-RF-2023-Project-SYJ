import domFn from "./dom.js";
import { liveData, center, subMenu, product, subData} from "./data.js";

// get방식 url 번호 확인
let data = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1];
}
// 타이틀 추가
let title = domFn.qs('title');
title.innerHTML = subData[data('pro')].Name;


// 서브메뉴
const sub_menu = domFn.qs('.gnb>ul');
for(let x in subMenu){
    sub_menu.innerHTML += 
    `
    <li>
        <a href="#">${x}</a>
        <div class="sub-menu">
            <ol>
            ${subMenu[x].map(val=>`
                <li>
                    <a href="#">${val}</a>
                </li>
            `).join('')}
            </ol>
        </div>
    </li>
    `;
};

// 변수 저장
let thumbnail = domFn.qs('.sub_img_thumb');
let ballImg = domFn.qs('.sub_ball_img ul');
let thInfo = domFn.qs('.sub_info_th');
let tdInfo = domFn.qs('.sub_info_tb');
let nav = domFn.qs('.sub_nav ul');
let cont = domFn.qs('.sub_det_cont');


// 번호에 맞게 여러 데이터 입력 - thumbnail,ballImg, cont

for(let i=1;i<=subData[data('pro')].imgct;i++){
    let path = `./imgs/${data('pro')}/thumb`+i+'.jpg';
    thumbnail.innerHTML += 
    `
        <img src="${path}" alt="${subData[data('pro')].Name+i}" />
    `;
    ballImg.innerHTML += 
    `
    <li>
        <a href="">
            <img src="./imgs/${data('pro')}/`+i+`.jpg" alt="${subData[data('pro')].Name+i}" />
        </a>
    </li>
    `
    if(i<=2){
        cont.innerHTML +=
        `
        <img src="./imgs/${data('pro')}/ct`+i+`.jpg" alt="${subData[data('pro')].kName+i}" />
        `
    }
};

// 번호에 맞게 데이터 입력 - thInfo, tdInfo,nav
thInfo.innerHTML+=`
    <p>${subData[data('pro')].Name}</p>
    <p><span>${subData[data('pro')].cName}</span>${subData[data('pro')].kName}</p>
`;
tdInfo.innerHTML += `
    <tr>
        <td>Color</td>
        <td>${subData[data('pro')].cl}</td>
    </tr>
    <tr>
        <td>Core</td>
        <td>${subData[data('pro')].cr}</td>
    </tr>
    <tr>
        <td>RG</td>
        <td>${subData[data('pro')].rg}</td>
    </tr>
    <tr>
        <td>RD</td>
        <td>${subData[data('pro')].df}</td>
    </tr>
    <tr>
        <td>Coverstrock</td>
        <td>${subData[data('pro')].cs}</td>
    </tr>
    <tr>
        <td>Finish</td>
        <td>${subData[data('pro')].fs}</td>
    </tr>
`;
console.log(Number(data('pro'))+1,Object.keys(subData).length);
nav.innerHTML +=`
<li>
    <p>PREVIOUS<a href="./sub.html?pro=${Number(data('pro'))-1==0?Number(data('pro')):Number(data('pro'))-1}">${Number(data('pro'))-1==0?'이전 제품이 없습니다.':subData[Number(data('pro'))-1].Name}</a></p>
</li>
<li>
    <p>NEXT<a href="./sub.html?pro=${Number(data('pro'))+1>Object.keys(subData).length?Number(data('pro')):Number(data('pro'))+1}">${Number(data('pro'))+1>Object.keys(subData).length?'다음 제품이 없습니다.':subData[Number(data('pro'))+1].Name}</a></p>
</li>
`;