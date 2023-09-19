const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),

    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////

let data = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1];
}
let title = domFn.qs('title');
title.innerHTML = subData[data('pro')].Name;

const sub_menu = domFn.qs('.gnb>ul');
console.log(sub_menu);
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
    }