import React, { FC } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import ANBBQ from "../../assets/icons/ANBBQ.png";
import Copyright from "../../assets/icons/Copyright.svg";
import loginBg from "../../assets/images/login-bg.jpg";

interface FormValues {
  phoneNumber: string;
  password: string;
}

const SignInPage: FC<{}> = () => {
  const { handleSubmit, control, formState } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div
      className="flex flex-col items-center bg-black h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <form className="bg-white w-[500px] rounded-[50px] mt-[148px] p-4" onSubmit={handleSubmit(onSubmit)}>
        <img className="w-[438px] h-[211px] ml-[29px] mt-[4px]" src={ANBBQ} alt="ANBBQ" />
        <div>LOGIN</div>
        <div className="mb-4 flex">
          <label htmlFor="phoneNumber" className="mr-2 ml-[25px] mt-[53px] text-[#333] font-bold whitespace-nowrap">
            Phone number
          </label>
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="phoneNumber"
                type="text"
                className="w-[342px] h-[38px] mt-[54px] mr-[27px] rounded border border-gray-300"
              />
            )}
          />
        </div>

        <div className="mb-4 flex">
          <label htmlFor="password" className="w-[123px] h-[38px] ml-[25px] mt-[18px] text-[#333] font-bold">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="password"
                type="password"
                className="w-[342px] h-[38px] mt-[18px] mr-[27px] rounded border border-gray-300"
              />
            )}
          />
        </div>

        <div className="flex mb-4">
          <div className="w-[160px] h-[33px] ml-[139px] mr-[81px]">
            <label>
              <input type="checkbox" />
              <span className="ml-[5px] mt-[17px]">Remember me</span>
            </label>
          </div>
          <div className="w-[187px] h-[33px]">
            <a href="#" style={{ textDecoration: "underline", fontSize: "15px" }}>
              Forgot password?
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="w-[123px] h-[41px] ml-[199px] mb-[35px] bg-blue-500 text-white px-4 py-2 rounded"
        >
          LOGIN
        </button>
      </form>
      <img className="w-[352px] h-[34px] mt-[180px]" src={Copyright} alt="Copyright" />
    </div>
  );
};

export default SignInPage;
