import React from 'react'
import { FieldError } from 'react-hook-form';

type InputFieldProps={
    label: string;
    type?: string;
    register: any;
    name: string;
    defaultValue?: string ;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;

}

const InputField = ({label,type='text',register,name,defaultValue,error,inputProps}:InputFieldProps) => {
  return (
      <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className='text-sm text-gray-400'>{label}</label>
          <input type={type} placeholder={label} {...register(name)} className={`border-2 border-gray-300 rounded-md p-2 w-full text-sm ${error?.message ? 'border-red-500' : ''}`} {...inputProps} defaultValue={defaultValue} />
          {error?.message && <p className='text-xs text-red-400'>{error?.message.toString()}</p>}
      </div>
  )
}

export default InputField