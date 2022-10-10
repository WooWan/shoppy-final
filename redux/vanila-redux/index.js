// import { createStore } from "redux";

// function counter(state = 0, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// const store = createStore(counter);

console.log("jjjj");

const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0,
};

// 리듀서 함수
function reducer(state = initialState, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지를 해 주어야 합니다.
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

const render = () => {
  const state = store.getState(); // 현재 상태를 불러옵니다.
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
