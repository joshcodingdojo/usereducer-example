import React, { useReducer } from "react";
import Example from "./components/Example";
// import re from "re";

const initialState = {
  name: {
    text: "",
    error: "Name must be at least 2 characters",
  },
  email: {
    text: "",
    error: "",
  },
};

function reducer(state, action) {
  console.log("inside reducer \n", action);
  switch (action.type) {
    case "SET_NAME_TEXT":
      return {
        ...state,
        name: {
          ...state.name,
          text: action.payload,
        },
      };
    case "SET_EMAIL_TEXT":
      return {
        ...state,
        email: {
          ...state.email,
          text: action.payload,
        },
      };
    case "SET_NAME_ERROR":
      console.log("SET NAME ERR");
      return {
        ...state,
        name: {
          ...state.name,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}

// function errorReducer

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    if (value.length > 2) {
      dispatch({
        type: "SET_NAME_ERROR",
        payload: "",
      });
    } else {
      dispatch({
        type: "SET_NAME_ERROR",
        payload: "Name must be at least 2 characters",
      });
    }
    dispatch({
      type: "SET_NAME_TEXT",
      payload: value,
    });
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    dispatch({
      type: "SET_EMAIL_TEXT",
      payload: value,
    });
  };

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: name,
      payload: value,
    });
  }

  return (
    <div>
      <Example />
      {/* {JSON.stringify(state)}
      <div>
        <label>
          <span>Name:</span>{" "}
          <input
            name="text"
            value={state.name.text}
            onChange={handleNameChange}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Email:</span>{" "}
          <input
            name="email"
            value={state.email.text}
            onChange={handleEmailChange}
          />
        </label>
      </div> */}
    </div>
  );
};

export default App;
