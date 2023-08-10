import React, { FC, useState } from "react";
import backgroundImage from "../../assets/images/Wallpaper of About us.png"
import logo from "../../assets/images/Logo.png"

const SignInPage: FC<{}> = () => {
  return (
    <div 
      className="flex justify-center items-center w-full h-full bg-cover"
      style={
        {
          background: `linear-gradient(rgba(211,211,211,.5), rgba(211,211,211,.5)), url('${backgroundImage}')`,
        }}>
      <MainContainer/>
    </div>
  );
};


const MainContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMeOn, setRememberMeOn] = useState(false)

  console.log(phoneNumber, password)
  
  return(
    <div className="w-[508px] h-[621px] bg-white rounded-[50px]" >

      <div className="flex w-full justify-center">
        <img src={`${logo}`} alt="" />
      </div>

      <div className="flex justify-center mt-[45px] text-[40px] font-[700] text-[#0A376E] alegreya">
        <span>LOGIN</span>
      </div>
      
      <div className="flex justify-center items-center mt-[54px] font-[700] noto-sans text-[15px]" >
        <PhoneNumberInput setPhoneNumber={setPhoneNumber}/>
      </div>

      <div className="flex justify-center items-center mt-[18px] font-[700] noto-sans text-[15px]" >
        <PasswordInput setPassword={setPassword}/>
      </div>

      <div className="flex justify-center items-center mt-[17px] montserrat text-[15px]">
          <input 
            type="checkbox"
            className="w-[18px] h-[18px]"
            onChange={e => setRememberMeOn(e.target.checked)}
            />
          <span className="ml-[2px]">Remember me</span>
          <a className="underline ml-[21px]" href="">Forgot password?</a>
      </div>


        <div className="flex justify-center mt-[36px] w-full montserrat text-[25px]">
          <button className="w-[123px] h-[41px] rounded-[50px] bg-[#1473E6] text-white">LOGIN</button>
        </div>
    </div>
  )
}


const PhoneNumberInput = (props: {setPhoneNumber: (str: string) => void}) => {
    const [isValidate, setIsValidate] = useState(true)

  const borderClass = isValidate? 
    'border-[#BCBCBC] focus:border-[#BCBCBC]' :
    'border-[#f00] focus:border-[#f00] focus:outline-none border-[2px]'


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    for (const ch of e.target.value) {
      if(!isValidChar(ch, [/\d/])){
        props.setPhoneNumber('')
        setIsValidate(false)
        return 
      }
    }

    props.setPhoneNumber(e.target.value)
    setIsValidate(true)
  }


  return (
    <>
      <div className="w-[114px] inline-block">
        <span className="text-center text-[#333]">Phone Number</span>
      </div>

      <input 
        className={`w-[342px] h-[38px] border-[1px] rounded-[20px] border-[#BCBCBC] pl-[20px] ${borderClass}`}
        type={'text'}
        onChange={onChange}
      />
    </>
  )
}


const isValidChar = (str: string, regexp_arr: RegExp[]) => {
  const char = str[0]

  return regexp_arr
    .map(regex => char.match(regex) != null)
    .reduce((bool_1, bool_2) => bool_1 || bool_2)
}


const PasswordInput = (props: {setPassword: (str: string) => void}) => {
  const [isValidate, setIsValidate] = useState(true)

  const borderClass = isValidate? 
    'border-[#BCBCBC] focus:border-[#BCBCBC]' :
    'border-[#f00] focus:border-[#f00] focus:outline-none border-[2px]'

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    for (const ch of e.target.value) {
      if(!isValidChar(ch, [/[A-z]/, /[0-9]/, /[!@#$%^&*()-+"№;:?*_=/]/]))
      {
        props.setPassword('')
        return setIsValidate(false)
      }
    }
    props.setPassword(e.target.value)
    setIsValidate(true)
  }


  return (
    <>
      <div className="w-[114px] inline-block">
        <span className="text-center text-[#333]">Password</span>
      </div>

      <input 
        className={`w-[342px] h-[38px] border-[1px] rounded-[20px] pl-[20px] ${borderClass}`}
        type={'password'}
        onChange={onChange}
      />
    </>
  )
}


export default SignInPage;
