import React, { useLayoutEffect, useState } from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';

import "./css/index.css";
import { Layout } from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/pages/Main';
import { Business } from './components/pages/Business';



function App(){
  return(
    <BrowserRouter>
      <Routes>
        {/* 중요!!! 레이아웃 컴포넌트를 루트로 설정! */}
        <Route path="/" element={<Layout />}>
          {/* 하위 라우트 셋팅 
          - path대신 index만 쓰면 첫페이지로 로딩함! 
          -> path는 Layout의 Link to="/" 에 해당하는 셋팅*/}
          <Route index element={<Main />} />
          <Route path='b2b' element={<Business />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />)