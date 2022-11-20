import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/dashboard");
  };

  const handleOnChange = (value, atributte) => {
    const copyState = { ...state };
    copyState[atributte] = value;
    console.log("STATE => ", copyState);
    setState(copyState);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-12">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={state.username}
            ></input>
          </div>
          <div className="col-md-12">
            <input
              type="text"
              class="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={state.password}
              onChange={(event) =>
                handleOnChange(event.target.value, "password")
              }
            ></input>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleOnClick()}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
