import { FieldErrors, UseFormRegister, useForm } from "react-hook-form"
import { TInputsForm } from "../props.context"
import { isLatinChar, isNumber, isOtherChar } from "../common"
import { ErrorDiv } from "./ErrorDiv"


type PasswordInputProps = {
    register: UseFormRegister<TInputsForm>,
    errors: FieldErrors<TInputsForm>
}

export const PasswordInput = ({register, errors} : PasswordInputProps) => {
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


