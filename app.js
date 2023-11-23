// jsx없이 함수형 컴포넌트 작성하기
import React, {useState} from 'react';

const App = ()=>{
  const [count, setCount]=useState(0);

  return React.createElement(
    'div', 
    null,
    React.createElement('p',{},`클릭 횟수 : ${count}`),
    React.createElement('button',{onclick:()=>{setCount(count+1)}},"누르세용")
  );
};

export default App;