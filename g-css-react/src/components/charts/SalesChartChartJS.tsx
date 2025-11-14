import styled from '@emotion/styled'
import React from 'react'
// 리액트 차트를 위한 import
import { Line } from 'react-chartjs-2';
// chart.js 사용을 위한 import
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

//! mock data
const data = {
  labels: ['월', '화', '수', '목', '금', '토', '일'],
  datasets: [
    {
      // 범례(Label)에 표시되는 데이터셋 이름
      label: '매출',
      // 각 라벨에 대응하는 숫자 데이터(labels와 대응)
      data: [120, 200, 150, 300, 250, 320, 290],
      // 라인 아래 영역 채우는 옵션
      fill: true,
      // 곡선의 부드러움
      tension: 0.3,
      // 라인 두께
      borderWidth: 2,
      // 각 데이터 점의 크기
      pointRadius: 3,
      // 배경색: 문자열 / 함수
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

//! chart 옵션 
// >> 반응형, 차트의 가로:세로 비율 유지, 범례 표시, 축 설정
const options = {
  responsive: true,
  // 유지 + 측면 + 비율
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { 
      // mode: 'index', intersect: false 
    }
  },
  interaction: {
  }
  // scales: {
  //   x: { grid: { diplay: false }, ticks: { maxRotation: 0 }},
  //   y: { grid: { color: 'rgba(255, 255, 255, 0.04)' }}
  // }
}

//! 차트를 포함할 컴포넌트
export const ChartWrapper = styled.div`
  height: clamp(160px, 32vh, 320px);
  width: 100%;
`;

function SalesChartChartJS() {
  return (
    <ChartWrapper>
      <Line data={data} options={options} />
    </ChartWrapper>
  )
}

export default SalesChartChartJS