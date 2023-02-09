import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { auth, provider } from "../../firebase";

const Index = () => {
  const [register, setRegister] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const signInHandlerGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      // console.log(res);
      setLoading(false);
    });
  };

  const signInHandler = (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    if (email === "" || password === "") {
      setError("Please enter required fields");
      setLoading(false);
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setLoading(false);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setLoading(false);
        });
    }
  };

  const registerHandler = (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    if (email === "" || password === "" || username === "") {
      setError("Please enter required fields.");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  };
  return (
    <div className="flex flex-col h-[90vh] py-7 px-0 bg-[#eee]">
      <div className="flex flex-col w-full items-center justify-center">
        <p className="mb-7 text-[1.5rem]">Login</p>
        <div className="flex flex-col w-72">
          <div
            className=" flex p-2 my-1 mx-0 rounded text-[rgba(0,0,0,0.8)] bg-white shadow cursor-pointer transition-all duration-300 hover:shadow-lg"
            onClick={signInHandlerGoogle}
          >
            <FcGoogle size={24} />
            <p className="ml-2">Google Login</p>
          </div>
          {/* <div className=" flex p-2 my-1 mx-0 rounded text-[rgba(0,0,0,0.8)] bg-white shadow cursor-pointer transition-all duration-300 hover:shadow-lg">
            <GrFacebook color="#0000e5" size={24} />
            <p className="ml-2">Login with Facebook</p>
          </div> */}
        </div>
        <div className="flex my-10 mx-0 w-72">
          <div className="w-full flex flex-col p-5 bg-white shadow-md rounded">
            {register ? (
              <div>
                <div className="flex flex-col">
                  <p className="text-[1.1rem] my-2 mx-0">Username</p>
                  <input
                    type="text"
                    className="p-2 border bg-transparent rounded outline-none"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[1.1rem] my-2 mx-0">Email</p>
                  <input
                    type="email"
                    className="p-2 border bg-transparent rounded outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[1.1rem] my-2 mx-0">Password</p>
                  <input
                    type="password"
                    className="p-2 border bg-transparent rounded outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded m-2 ml-0 w-full"
                  onClick={registerHandler}
                  disabled={loading}
                >
                  
                  {loading ? "Registering....." : "Register"}
                </button>
              </div>
            ) : (
              <div>
                <div className="flex flex-col">
                  <p className="text-[1.1rem] my-2 mx-0">Email</p>
                  <input
                    type="email"
                    className="p-2 border bg-transparent rounded outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-[1.1rem] my-2 mx-0">Password</p>
                  <input
                    type="password"
                    className="p-2 border bg-transparent rounded outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded m-2 ml-0 w-full"
                  onClick={signInHandler}
                  disabled={loading}
                >
                  {loading ? "Signing in....." : "Login"}
                </button>
              </div>
            )}
            <p
              className="underline text-blue-500 text-center cursor-pointer"
              onClick={() => setRegister(!register)}
            >
              {register ? "Login?" : "Register?"}
            </p>
          </div>
        </div>
        {error!==""&&(<p className="text-red-500 text-sm font-semibold">{error}</p>)}
      </div>
    </div>
  );
};

export default Index;
