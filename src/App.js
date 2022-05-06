//import './App.css';
import myheader from './header';
import myfooter from './footer';
import Counter from './counter';
import OddEven from './oddeven';
import Container from './container';

function App() {
  let name = "jiwon";

  const style = {
    App: {
      backgroundColor : "snow",
    },
    h2 : {
      color: "black",
    },
    bold_text: {
      color: "blue",
    },
  };

//const num = 3;

  return (
    <Container>
      <div style= {style.App}>
        <Counter></Counter>
      </div>
    </Container>
  );
}
// module exports 와 같은 기능, 하나만 내보낼 수 있음.
export default App;

/*
JSX 문법
-닫힘 태그 필수 />
-최상위 태그 규칙 (react.Fragment로 대체 가능하다.)
-return 값이 반드시 있어야 한다.
-이름은 대문자로 시작한다.

3항 연산자로 조건부 rendering도 가능함.

props = 초기값, 객체로 받음.
 */
