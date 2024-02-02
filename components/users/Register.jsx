import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { LiaEyeSlashSolid, LiaEyeSolid } from "react-icons/lia";
import { redirect } from "react-router-dom";
import Setting from "./Setting";
export default function Register() {
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [checkbox, setCheckbox] = useState(true);
  const [info, setInfo] = useState([]);
  const [_, setCookies] = useCookies(["access_token"]);
  console.log("sief : ", _.access_token);

  useEffect(() => {
    const fetch = async () => {
      const response =
        _.access_token &&
        (await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: "Bearer " + _.access_token,
          },
        }));
      setInfo(response?.data);
    };
    fetch();
  }, []);
  console.log(info);
  return (
    <>
      {_.access_token ? (
        <div className="w-full  flex flex-col items-center justify-center">
          {/* {info && (
            <div>
              <div className="w-[150px] h-[150px] border overflow-hidden rounded-full">
                <img src={info.image} alt="" srcSet="" />
              </div>{" "}
              <input
                className="border"
                type="text"
                value={info.email}
                readOnly
              />
              <input
                className="border"
                type="text"
                value={info.firstName}
                readOnly
              />
              <input
                className="border"
                type="text"
                value={info.lastName}
                readOnly
              />
              <input
                className="border"
                type="text"
                value={info.gender}
                readOnly
              />
              <input
                className="border"
                type="text"
                value={info.username}
                readOnly
              />
            </div>
          )} */}
          <div className=" w-full">
            <Setting info={info} />
          </div>
          <button
            onClick={() => {
              setCookies("access_token", null);
              redirect("/users");
              /* window.location.reload(false); */
            }}
          >
            {" "}
            Log Out
          </button>
        </div>
      ) : (
        <form
          className="h-[512px]  w-full flex items-center justify-center"
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await axios.post(
              "https://dummyjson.com/auth/login",
              {
                username: email,
                password: password1,
                // expiresInMins: 60, // optional
              }
            );
            setCookies("access_token", response.data.token);
            window.location.reload();
          }}
        >
          <div className="w-[520px] h-[432px] px-6 pt-6 pb-8 bg-white rounded-lg shadow shadow-[#fdc936] border border-[#fdc936] flex-col justify-center items-center gap-5 inline-flex">
            <div className="text-zinc-900 text-[32px] font-semibold font-['Neutra'] leading-[38.40px]">
              Login
            </div>
            <div className="flex-col justify-start items-start gap-4 flex">
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="w-[440px] h-[51px] bg-white rounded-md border border-neutral-200 justify-center items-center gap-2.5 inline-flex">
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-full px-4 border focus:outline-[#fdc936] border-neutral-200  placeholder:font-['Neutra'] font-['Neutra'] "
                    placeholder="Email"
                  />
                </div>
                <div className="h-[51px] w-full relative rounded-md bg-red-500 border border-neutral-200 justify-center items-center  flex flex-col">
                  <input
                    type={`${password === true ? "text" : "password"}`}
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    required
                    className="w-full h-full px-4 border focus:outline-[#fdc936] border-neutral-200  placeholder:font-['Neutra'] font-['Neutra'] "
                    placeholder="Password"
                  />
                  <div className="w-5 h-5 right-[5%] flex items-center justify-center absolute">
                    {password === false ? (
                      <LiaEyeSlashSolid
                        onClick={() => setPassword(!password)}
                      />
                    ) : (
                      <LiaEyeSolid onClick={() => setPassword(!password)} />
                    )}
                  </div>
                </div>
              </div>
              <div className="justify-start items-start gap-1.5 inline-flex">
                <div className="w-5 h-5 relative">
                  <input
                    type="checkbox"
                    value={checkbox}
                    required
                    className="w-5 h-5 left-0 accent-[#fdc936] top-0 absolute bg-white rounded-[3px] border border-stone-300"
                  />
                </div>
                <div className="text-stone-500 text-sm font-normal font-['Neutra'] leading-[21px]">
                  Accept all terms & Conditions
                </div>
              </div>
            </div>
            <button className="w-[472px] px-8 py-3.5 bg-[#fdc936] rounded-[43px] justify-center items-center gap-3 inline-flex">
              <div className="text-white text-sm font-semibold font-['Neutra'] leading-[16.80px]">
                Log in
              </div>
            </button>
          </div>
        </form>
      )}
    </>
  );
}
{
  /* <Link to="/login">Login</Link>
            <div className=" h-[51px] w-full bg-white rounded-md border border-neutral-200 justify-center items-center  flex flex-col"><input
                type="text"
                className="w-full h-full px-4"
                placeholder="password"
              />
              <div className="w-5 h-5 right-[3%] flex items-center justify-center absolute">
                <img src={Eyes} alt="eyes" />
              </div> */
}
