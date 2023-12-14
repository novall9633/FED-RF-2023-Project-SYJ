
import { FooterArea } from "./FooterArea";
import { MainArea } from "./MainArea";
import { TopArea } from "./TopArea";

// Context API 불러오기
import { nCon } from "../modules/nContext";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

export function Layout() {

  // 랜더링 후(화면보이기전) 실행구역 //////////
  useLayoutEffect(()=>{
    // 페이지 이동시 스크롤위치 상단이동
    window.scrollTo(0,0);
  }); /////////// useEffect ///////////

  // 라우터 이동객체설정
  const goNav = useNavigate();

  const [logoColor,setLogoColor] = useState(null);


  // 라우터 이동함수 : pgName - 페이지이름 / param - 전달값
  // 메모이제이션 되는 TopArea 컴포넌트에 제공하는 함수가 
  // useCallback을 사용한 메모이제이션 처리되어야 변경없는 것을 
  // 체크하여 함수를 업데이트 하지 않는다.
  // useCallback(기존익명함수,[의존성])
  // ->의존성 변수가 없을 때 비워놓아도 효과 있음(단, 형식은 맞출것)
  const chgPage = useCallback((pgName,param) => goNav(pgName,param),[]);

  /********************************** 
   [컨텍스트 API 공유값 설정]
   1. chgPage 함수 : 라우터 이동기능   
   **********************************/
  // 리턴코드 ////////////////////////
  return (
    <nCon.Provider value={{ chgPage, logoColor, setLogoColor }}>
      {/* 메모이제이션 관리를 위해 함수를 컨텍스트방식이 아닌 속성으로 직접보냄 */}
      <TopArea chgPageFn={chgPage} />
      <MainArea />
      <FooterArea />
    </nCon.Provider>
  );
} /////////// Layout 컴포넌트 ///////////