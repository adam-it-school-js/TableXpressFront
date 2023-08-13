import { FieldErrors, UseFormRegister } from "react-hook-form"
import { isNumber } from "../common"
import { TInputsForm } from "../props.context"
import { ErrorDiv } from "./ErrorDiv"

type PhoneNumberInputProps = {
    register: UseFormRegister<TInputsForm>,
    errors: FieldErrors<TInputsForm>
}

export const PhoneNumberInput = ({register, errors}: PhoneNumberInputProps) => {

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

