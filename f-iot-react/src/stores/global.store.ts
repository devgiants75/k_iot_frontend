//! global.store.ts
// : 공용 데이터 (공용 코드, 설정 등)
// - API로 받아온 공용 데이터를 전역 캐시로 보관할 때

import { getCommons, type CommonResponse } from "@/apis/commonApi";
import { create } from "zustand";

// EX) 카테고리, 지역 리스트
//     > 여러 페이지나 컴포넌트에서 공통적으로 필요한 데이터
//     > 매번 API 호출 X, 한 번 불러온 데이터를 전역에 저장하고 사용 (효율적)
//     ^ 프로젝트 실행 진입점에서 호출! (웹 사이트 실행 시 호출!)

//? 전역 상태 관리 하는 법

//@ 1. 전역 상태 구조 명시 (interface | type 별칭)
// 1) 카테고리, 지역 리스트 - 속성 정의 (실제 전역 관리할 데이터)
// 2) 전역 로딩 상태 관리 - 한 번 데이터가 로딩되었는지 여부를 저장 (boolean)
//    > 여러 컴포넌트들이 isLoaded 데이터를 보고 
//    , 로딩 스피너 표시 여부나 초기 fetch 실행 여부를 판단
// 3) 실제 api 호출 함수 - fetchGlobalData (비동기 함수)

interface GlobalState {
  categories: string[];
  regions: string[];
  isLoaded: boolean;

  // axios(Promise 기반 비동기) 반환 타입은 Promise<데이터타입>
  fetchGlobalData: () => Promise<void>;
}

//@ 스토어 생성: create<객체타입>()
// : 해당 스토어는 외부에서 구조 분해 할당 또는 부분 구독하여 사용
// - use데이터명Store (파일명: 데이터명.store.ts / 타입명: 데이터명State)

// create 함수는 콜백함수를 가짐
// : 콜백함수는 set 설정함수를 매개변수로 받고, state 제네릭 객체 타입을 반환
//   > 객체 반환 시 함수의 구현부와 구분을 위해 ()소괄호로 감싸기!!!!!
export const useGlobalStore = create<GlobalState>((set) => ({
  // 속성값과 함수를 정의
  // - 속성값: 초기값 할당
  // - 함수: 구조 정의 (해당 함수를 통해서 "속성값 업데이트" 할 수 있는 함수)
  categories: [],
  regions: [],
  isLoaded: false,

  fetchGlobalData: async () => {
    try {
      // const commonDatas: CommonResponse = await getCommons();
      // set({
      //   categories: commonDatas.categories,
      //   regions: commonDatas.regions,
      //   isLoaded: true
      // });

      set({
        categories: ["COFFEE", "DESSERT", "DRINKS", "FOODS"],
        regions: ["SEOUL", "BUSAN", "DAEJEON", "ULSAN"],
        isLoaded: true
      });
    } catch (e) {
      set({
        categories: [],
        regions: [],
        isLoaded: false
      })
    }
  }
})); 
