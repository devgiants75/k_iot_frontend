import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Basic from '@/pages/a_basic'; 
import RoutePages from '@/pages/b_Route';
import Hooks from '@/pages/c_hooks';
import HTTP from '@/pages/d_http';
import GlobalState from '@/pages/e_global_state';

import Navibar from './components/Navibar';
import PostList from './_practices/a_basic/PostList';
import PostDetail from './components/PostDetail';
import SearchApp from './_practices/c_hooks/SearchApp';
import Z_Products from './pages/b_Route/Z_Products';
import Z_ProductDetail from './pages/b_Route/Z_ProductDetail';
import Z_ProductInfo from './pages/b_Route/Z_ProductInfo';
import Z_ProductReviews from './pages/b_Route/Z_ProductReviews';
import Z_Dashboard from './pages/b_Route/Z_Dashboard';
import { useUIStore } from './stores/ui.store';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Toast from './components/Toast';
import { useGlobalStore } from './stores/global.store';
import { useEffect } from 'react';
// 파일명 없으면 무조건! 해당 파일의 index 라는 이름의 파일을 가져옴

function App() {
  const { isLoaded, fetchGlobalData } = useGlobalStore();

  useEffect(() => {
    if (!isLoaded) {
      // 전역 상태 관리에 Global 데이터가 없는 경우
      fetchGlobalData();
    }

  }, [isLoaded, fetchGlobalData]); // 맨 처음 실행 + 의존성 배열값 변경 마다 실행

  //@ zustand의 store는 호출 시 내부의 스토어를 객체 형식으로 반환
  // const { 전역상태내부의 속성 또는 함수명 } = useUIStore(); 
  // > 내부의 모든 속성과 메서드 호출 후 좌항에 일치하는 값만을 남김

  // 필요한 속성, 메서드만 뽑아서 반환
  const darkMode = useUIStore(state => state.darkMode); // true: 다크 / false: 라이트

  const appStyle = {
    minHeight: '100vh',
    backgroundColor: darkMode ? "#111" : "#fff",
    color: darkMode ? "#bbb" : "#111",
    transition: "all 0.3s ease"
  }

  return (
    <div style={appStyle}>
      {/* 경로와 상관없이 렌더링 */}
      <Header />
      <Sidebar />
      <Navibar />

      {/* Routes 태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 특정 경로에 컴포넌트 지정 (단일 태그 권장) */}
        <Route path='/basic' element={<Basic />} />
        {/* 
          중첩 라우팅 사용을 위해 반드시 부모 Route의 path 끝에 /*가 필수! 
          - 중첩된 자식 라우트 인식
        */}
        <Route path='/route/*' element={<RoutePages />} />
        <Route path='/hooks' element={<Hooks />} />
        <Route path='/http' element={<HTTP />} />
        <Route path='/global-state' element={<GlobalState />} />

        {/* //@ _practice 실습 코드 */}
        <Route path='/practice/post' element={<PostList />} />
        <Route path='/practice/post/:id' element={<PostDetail />} />
        <Route path='/practice/search' element={<SearchApp /> } />

        {/* //@ pages/b_Route - Z_실습 코드 */}
        {/* 절대경로 */}
        <Route path='/' element={<Navigate to="/products" />} />
        <Route path='/products' element={<Z_Products />} />
        <Route path='/products/:id' element={<Z_ProductDetail />}>
          {/* 중첩 라우트: 상대경로 */}
          <Route path='info' element={<Z_ProductInfo />} />
          <Route path='reviews' element={<Z_ProductReviews />} />
        </Route>
        <Route path='/dashboard' element={<Z_Dashboard />} />
        
      </Routes>
      <Toast />
    </div>
  )
}

export default App
