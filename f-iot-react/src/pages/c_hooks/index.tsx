import React from "react";
import ToggleSection from "@/components/ToggleSection";

import State01 from "./a_useState/State01";
import State02 from "./a_useState/State02";
import State03 from "./a_useState/State03";
import State04 from "./a_useState/State04";
import State05 from "./a_useState/State05";
import State06 from "./a_useState/State06";
import Ref01 from "./b_useRef/Ref01";
import Ref02 from "./b_useRef/Ref02";
import Ref_Practice01 from "./b_useRef/Practice01";
import Ref_Practice02 from "./b_useRef/Practice02";
import Effect01 from "./c_useEffect/Effect01";
import Effect02 from "./c_useEffect/Effect02";
import Effect_Practice01 from "./c_useEffect/Practice01";
import UseCallback from "./d_callback_memo/A_UseCallback";
import UseMemo from './d_callback_memo/B_UseMemo';
import Reducer01 from "./e_useReducer/Reducer01";
import Reducer02 from "./e_useReducer/Reducer02";
import Custom01 from "./f_custom/Custom01";
import Custom02 from "./f_custom/Custom02";
import Custom03 from "./f_custom/Custom03";
import TodoAppLocalStorage from "@/_practices/c_hooks/TodoAppLocalStorage";

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        === 리액트 Hooks ===
      </h1>

      <ToggleSection title="7. 리액트 Hooks - Webcam">
        <p>Webcam</p>
        {/* <Webcam /> */}
      </ToggleSection>
      
      <ToggleSection title="7. 리액트 Hooks - Todo(LocalStorage)">
        <TodoAppLocalStorage />
      </ToggleSection>

      <ToggleSection title="6. 리액트 Hooks - custom Hooks">
        <Custom01 /> <hr />
        <Custom02 /> <hr />
        <Custom03 /> <hr />
      </ToggleSection>
      
      <ToggleSection title="5. 리액트 Hooks - useReducer">
        <Reducer01 /> <hr />
        <Reducer02 />
      </ToggleSection>
      
      <ToggleSection title="4. 리액트 Hooks - useCallback & useMemo">
        <UseCallback /> <hr />
        <UseMemo />
      </ToggleSection>

      <ToggleSection title="3. 리액트 Hooks - useEffect">
        <Effect01 /> <hr />
        <Effect02 /> <hr />
        <Effect_Practice01 />
      </ToggleSection>

      <ToggleSection title="2. 리액트 Hooks - useRef">
        <Ref01 /> <hr />
        <Ref02 /> <hr />
        <Ref_Practice01 /> <hr />
        <Ref_Practice02 /> <hr />
      </ToggleSection>

      <ToggleSection title="1. 리액트 Hooks - useState">
        <State01 /> <hr />
        <State02 /> <hr />
        <State03 /> <hr />
        <State04 /> <hr />
        <State05 /> <hr />
        <State06 /> <hr />
      </ToggleSection>
    </div>
  );
}

export default Index;
