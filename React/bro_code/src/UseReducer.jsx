import { useReducer } from "react";

const initialState = {
  input: "",
  count: 0,
  color: false,
};

const ACTION = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  INPUT: "input",
  COLOR: "changeColor",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ACTION.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ACTION.INPUT:
      return {
        ...state,
        input: action.payload,
      };
    case ACTION.COLOR:
      return {
        ...state,
        color: !state.color,
      };
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <main>
      <input
        type="text"
        value={state.input}
        onChange={(e) =>
          dispatch({ type: ACTION.INPUT, payload: e.target.value })
        }
      />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.COLOR })}>Color</button>
      </section>
      <br />
      <p>{state.input}</p>
    </main>
  );
}

export default UseReducer;
