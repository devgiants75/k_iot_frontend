//! OpenWeatherApi
// : 실시간 날씨 정보를 제공해주는 API 
// >> 일부 무료 사용 가능
// https://openweathermap.org/api

const apiKey = "b3d2a174bd0bf979992c01994dd21eea";
const lang = "kr";

/*
  ! OpenWeatherMap API 요청 URL
  https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=metric

  ? q: 도시 이름 
    > Capitalize 사용
      - 시작은 대문자, 기타 문자는 소문자
      EX) Seoul, Busan, London, Toyko 등
  
  ? appid: OpenWeatherMap에서 발급 받은 API 키 (요청 인증용)
  ? lang: 언어 설정 (한국어 응답)
  ? units: 단위 설정 (metric - 섭씨 °C, imperial - 화씨 °F)
*/

function capitalizeCity(city) {
  //! 첫 글자는 대문자, 나머지는 소문자로 변환하는 함수 (사용자 이용성 향상!)
  const trimCity = city.trim();
  if (trimCity.length === 0) return '';

  return trimCity.charAt(0).toUpperCase() + trimCity.slice(1).toLowerCase();
}

document.getElementById('search-button').addEventListener('click', () => {
  //! search-button 버튼 클릭 시
  // : input창의 value 값을 getWeatherData에 전달

  //? 입력값 검증 필요
  // : 사용자가 입력한 도시 이름을 매개변수로 받아
  //    Capitalize 값인지 확인 >> capitalizeCity(city);

  const cityInput = document.getElementById('city-input').value;
  const city = capitalizeCity(cityInput);

  if (city === '') {
    alert('지역명을 입력해주세요.');
    return;
  }

  getWeatherData(city);
  document.getElementById('city-input').value = ''; // 입력값 초기화
});

async function getWeatherData(city) {
  //! 사용자가 입력한 도시 이름을 매개변수로 받아
  // Open API에 요청하고 결과값을 displayWeather 함수의 인자로 전달하는 함수
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}&units=metric`;

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error: status(${response.status})`);
    }

    const data = await response.json();

    displayWeather(data);
  } catch (e) {
    console.error('Error: ' + e);
    document.getElementById('weather-info').innerHTML =
      `<p>날씨 정보를 불러오는데 실패하였습니다. (${e.message})</p>`;
  }
}

function displayWeather(data) {
  //! 검색 결과값(해당 도시의 날씨 데이터)을 브라우저에 출력
}