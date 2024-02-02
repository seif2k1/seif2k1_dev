import { Link } from "react-router-dom";
import Eyes from "../../assets/eye.svg";
export default function Login() {
  return (
    <div className="h-[512px]  w-full flex items-center justify-center">
      <div className="w-[520px] h-[371px] px-6 pt-6 pb-8 bg-white rounded-lg shadow border border-zinc-100 flex-col justify-start items-center gap-5 inline-flex">
        <div className="text-zinc-900 text-[32px] font-['Poppins'] leading-[38.40px]">
          Sign In
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="px-4 py-3.5 bg-white rounded-md border border-neutral-200 justify-center items-center gap-2.5 inline-flex">
              <div className="w-[440px] text-neutral-400 text-base font-normal font-['Poppins'] leading-tight">
                Email
              </div>
            </div>
            <div className="px-4 py-3.5 bg-white rounded-md border border-neutral-200 justify-start items-center inline-flex">
              <div className="w-[420px] text-neutral-400 text-base font-normal font-['Poppins'] leading-tight">
                Password
              </div>
              <div className="w-5 h-5 relative">
                <div className="w-[16.67px] h-[11.67px] left-[1.67px] top-[4.17px] absolute">
                  <img src={Eyes} alt="eyes" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[472px] justify-between items-start inline-flex">
            <div className="justify-start items-start gap-1.5 flex">
              <div className="w-5 h-5 relative">
                <input
                  type="checkbox"
                  className="w-5 h-5 left-0 top-0 absolute bg-white rounded-[3px] border border-stone-300"
                />
              </div>
              <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-[21px]">
                Remember me
              </div>
            </div>
            <div className="text-stone-500 text-sm font-normal font-['Poppins'] leading-[21px]">
              Forget Password
            </div>
          </div>
        </div>
        <div className="w-[472px] px-8 py-3.5 bg-[#c0e3e5] rounded-[43px] justify-center items-center gap-3 inline-flex">
          <button className="text-white text-sm font-semibold font-['Poppins'] leading-[16.80px]">
            Login
          </button>
          <button className="text-white text-sm font-semibold font-neutre leading-[16.80px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
