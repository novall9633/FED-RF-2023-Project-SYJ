import React, { useLayoutEffect, useState } from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import { nCon } from './components/modules/nContext';
import { TopArea } from './components/layout/TopArea';
import { FooterArea } from './components/layout/FooterArea';
import { MainArea } from './components/layout/MainArea';

import "./css/main.css";



function App(){

  // 후크상태변수 설정 : 페이지변경
  const [pgName,setPgName] = useState('main');

  // 페이지변경 상태변수 업데이트 함수
  const chgPgName = (txt) => {
    setPgName(txt);
  }; ///////// chgPgName 함수 //////
  
  // 처음로딩시 스크롤 상단이동 ///////
  useLayoutEffect(()=>{
    window.scrollTo(0,0);
  }); ///////useLayoutEffect ////////////

  return(
    <nCon.Provider value={{pgName,chgPgName}}>
        <TopArea />        
        <MainArea />
        <FooterArea />
      </nCon.Provider>
  )
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />)