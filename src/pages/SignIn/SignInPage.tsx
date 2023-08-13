import React, { FC, useState } from "react";
import backgroundImage from "../../assets/images/Wallpaper of About us.png"
import logo from "../../assets/images/Logo.png"
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordInput } from "./components/PasswordInput";
import { TInputsForm } from "./props.context";
import { PhoneNumberInput } from "./components/PhoneNumberInput";


const SignInPage: FC<{}> = () => {
  return (
    <div 
      className="flex flex-col justify-center items-center w-full h-full bg-cover bg-center"
      style={
        {
          background: `linear-gradient(rgba(211,211,211,.5), rgba(211,211,211,.5)), url('${backgroundImage}')`,
          backgroundPosition: 'center'
        }}>
      <MainContainer/>
      <div className="alegreya text-[25px] text-[#0A376E] font-[700] mt-[227px]">Copyright © 2021 AN BBQ Themes</div>
    </div>
  );
};


const MainContainer = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<TInputsForm>()

  const onSubmit: SubmitHandler<TInputsForm> = (data) => {
    // console.log(data)
  }

  return(
    <div className="w-[508px] h-[621px] bg-white rounded-[50px]" >

      <div className="flex w-full justify-center">
        <img src={`${logo}`} alt="" />
      </div>

      <div className="flex justify-center mt-[45px] text-[40px] font-[700] text-[#0A376E] alegreya">
        <span>LOGIN</span>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center mt-[54px] font-[700] noto-sans text-[15px]" >
          <PhoneNumberInput register={register} errors={errors}/>
        </div>

        <div className="flex justify-center items-center mt-[18px] font-[700] noto-sans text-[15px]" >
          <PasswordInput register={register} errors={errors}/>
        </div>

        <div className="flex justify-center items-center mt-[17px] montserrat text-[15px]">
            <input 
              type="checkbox"
              className="w-[18px] h-[18px]"
              {...register('rememberMe')}
              />
            <span className="ml-[2px]">Remember me</span>
            <a className="underline ml-[21px]" href="">Forgot password?</a>
        </div>


          <div className="flex justify-center mt-[36px] w-full montserrat text-[25px]">
            <button type="submit" className="w-[123px] h-[41px] rounded-[50px] bg-[#1473E6] text-white">LOGIN</button>
          </div>
        </form>
    </div>
  )
}


export default SignInPage;
