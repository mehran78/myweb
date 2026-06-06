import { useEffect, useReducer, useState } from "react";

function PRACTICE() {
  const [step, setStep] = useState(1);

  const [variable, setvariable] = useState(1);
  console.log(variable);

  const [val, dispatchh] = useReducer(reducer, initialState);

  // const increaseState = function () {
  //   setStep((step) => step + 1);
  // };
  // const decreaseState = function () {
  //   setStep(step - 1);
  // };

  useEffect(function () {}, []);

  const initialState = [];

  const reducer = function (state, action) {
    switch (action.type) {
      case "increment":
        return { number: state.number + 1 };
      case "decrement":
        return { number: state.number - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state, dispatch);

  return (
    <div>
      <input
        value={step}
        onClick={() => dispatch({ type: "increment" })}
        onChange={(e) => setStep(Number(e.target.value))}
      ></input>
    </div>
  );
}

export default PRACTICE;
