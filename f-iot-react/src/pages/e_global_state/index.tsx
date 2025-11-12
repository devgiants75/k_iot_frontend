import React from "react";
import ToggleSection from "@/components/ToggleSection";
import A_Context from "./A_Context";
import B_Zustand from "./B_Zustand";
import SignIn from "./SignIn";
import GlobalData from "./GlobalData";
import TruckDetailPage from "./TruckDetailPage";

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        === 리액트 전역 상태 관리 ===
      </h1>

      <ToggleSection title="1. Context API">
        <A_Context />
      </ToggleSection>

      <ToggleSection title="2. Zustand">
        <B_Zustand />
      </ToggleSection>
      
      <ToggleSection title="3. SignIn 페이지">
        <SignIn />
      </ToggleSection>
      
      <ToggleSection title="4. zustand 연습(global-data)">
        <GlobalData />
      </ToggleSection>
      
      <ToggleSection title="5. zustand 연습(reservation)">
        <TruckDetailPage />
      </ToggleSection>

    </div>
  );
}

export default Index;
