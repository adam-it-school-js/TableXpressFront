import React, { FC } from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";

import Wallpaper from "../../assets/icons/Wallpaper of About us.png";
import Wallpaper1 from "../../assets/icons/Wallpaper of About us1.png";
import ANBBQ from "../../assets/icons/ANBBQ.png";
import Copyright from "../../assets/icons/Copyright.svg";
const SignInPage: FC<{}> = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center ">
        <img className="w-[810px] h-[1056px]" src={Wallpaper} alt="Wallpaper" />
        <img
          className="w-[810px] h-[1056px]"
          src={Wallpaper1}
          alt="Wallpaper1"
        />
        <div
          className="absolute left-[562px] top-[148px] w-[508px] h-[621px]  bg-white"
          style={{ borderRadius: "50px" }}
        >
          <img
            className="w-[438px] h-[211px] ml-[29px] mt-[4px]"
            src={ANBBQ}
            alt="ANBBQ"
          />
          <div
            style={{
              fontSize: "40px",
              color: "#0A376E",
              fontFamily: "alegreya",
              width: "119px",
              height: "54px",
              marginLeft: "195px",
              marginTop: "42px",
              lineHeight: "normal",
              fontWeight: 900,
              fontStyle: "normal",
            }}
          >
            LOGIN
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 flex">
              <div
                className="mr-2 ml-[25px] mt-[53px] p-[0px] text-[#333] font-bold font-family: Noto Sans SC"
                style={{ whiteSpace: "nowrap" }}
              >
                Phone number
              </div>
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="w-[342px] h-[38px] mt-[54px] mr-[27px] rounded border border-gray-300"
                    style={{ borderRadius: "20px" }}
                  />
                )}
              />
            </div>

            <div className="mb-4 flex">
              <div className="pr-[0px] w-[123px] h-[38px] ml-[25px] mt-[18px] text-[#333] font-bold">
                Password
              </div>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    className="pl-[0px] w-[342px] h-[38px] mt-[18px] mr-[27px] rounded border border-gray-300"
                    style={{ borderRadius: "20px" }}
                  />
                )}
              />
            </div>
            <div className="flex">
              <div className="w-[160px] h-[33px] mb-4 ml-[139px] mr-[81px]">
                <label>
                  <input type="checkbox" />
                  <span className="ml-[5px] mt-[17px]">Remember me</span>
                </label>
              </div>

              <div className="mb-4 w-[187px] h-[33px]">
                <a
                  href="#"
                  style={{ textDecoration: "underline", fontSize: "15px" }}
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-[123px] h-[41px] ml-[199px] mb-[35px] bg-blue-500 text-white px-4 py-2 rounded"
                style={{ borderRadius: "50px" }}
              >
                <span
                  className="w-full h-full flex justify-center items-center"
                  style={{
                    fontSize: "25px",
                    fontWeight: "500",
                    fontStyle: "normal",
                  }}
                >
                  LOGIN
                </span>
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            position: "absolute",
            marginLeft: "630px",
            marginTop: "970px",
            textAlign: "center",
          }}
        >
          <img className="w-[352px] h-[34px]" src={Copyright} alt="Copyright" />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
