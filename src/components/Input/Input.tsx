import { FieldErrors, UseFormRegister } from "react-hook-form"
import { isLatinChar, isNumber, isOtherChar } from "./common"


const ErrorDiv = ({children}: {children: string}) =>
  <div className="text-[11px] text-[#d00]">{children}</div>


type PhoneNumberInputProps = {
  register: UseFormRegister<{phoneNumber: string}>,
  errors: FieldErrors<{phoneNumber: string}>
}

const PhoneNumberInput = ({register, errors}: PhoneNumberInputProps) => {
    const validate = (str: string) => {
        for (const ch of str) {
            if(!isNumber(ch))
            {
                return false
            }
        }
    }

  return (
    <>
      <div className="w-[114px] inline-block">
        <span className="text-center text-[#333]">Phone Number</span>
      </div>

        <div>
            {errors.phoneNumber && <ErrorDiv>Only digit and min length 4</ErrorDiv>}
            <input 
                className={`w-[342px] h-[38px] border-[1px] rounded-[20px] border-[#BCBCBC] pl-[20px]`}
                type={'text'}
                {...register('phoneNumber', {required: true, minLength: 4, validate: validate})}
            />
        </div>
    </>
  )
}


type PasswordInputProps = {
    register: UseFormRegister<{password: string}>,
    errors: FieldErrors<{password: string}>
}

const PasswordInput = ({register, errors} : PasswordInputProps) => {
    const validate = (str: string) => {
        for (const ch of str) {
            if(!(isLatinChar(ch) || isNumber(ch) || isOtherChar(ch)))
            {
                return false
            }
        }
    }
      
  return (
    <>
      <div className="w-[114px] inline-block">
        <span className="text-center text-[#333]">Password</span>
      </div>
      <div>
        {
          (errors.password?.type === 'minLength' || errors.password?.type === 'required')
          && <ErrorDiv>Min Length = 6</ErrorDiv>
        }
        
        {errors.password?.type === 'validate' && <ErrorDiv>Only latin, number or "!@#$%^&*()?:;"#-_=+"</ErrorDiv>}
        <input 
          className={`w-[342px] h-[38px] border-[1px] rounded-[20px] border-[#BCBCBC] pl-[20px] `}
          type={'password'}
          {...register('password', {required: true, minLength: 6, validate: validate}, )}
        />
      </div>
    </>
  )
}



type InputProps = {
  type: 'password' | 'phoneNumber',
  register: any,
  errors: any
} 

export const Input = (props: InputProps) => {
  if(props.type === 'password')
  {
    return <PasswordInput register={props.register} errors={props.errors}/>
  }
  else if(props.type === 'phoneNumber')
  {
    
    return <PhoneNumberInput register={props.register} errors={props.errors}/>
  }
  
  console.error(`props.type must be = 'password' | 'phoneNumber`)
  return <PhoneNumberInput register={props.register} errors={props.errors}/>
}


