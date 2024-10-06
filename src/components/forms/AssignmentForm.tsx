"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import InputField from '../InputField';
import { error } from 'console';
import Image from 'next/image';


const schema = z.object({
    username: z.string().min(3, { message: "Username must be at least 3 characters long!" })
        .max(20, "Username must be at most 20 characters long!"),
    email: z.string().email({ message: "Invalid email address!" }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    firstName: z.string().min(1, { message: 'First Name is required' }),
    lastName: z.string().min(1, { message: 'Last Name is required' }),
    phoneNumber: z.string().min(1, { message: 'Phone  is required' }),
    bloodType: z.string().min(1, { message: 'Blood Type  is required' }),
    address: z.string().min(1, { message: 'Address  is required' }),
    birthday: z.date({ message: 'Birthday  is required' }),
    sex: z.enum(["male", "female"], { message: "Sex is required" }),
    img: z.instanceof(File, { message: 'Image is required' })



});
type Inputs = z.infer<typeof schema>;
const AssignmentForm = ({ type, data }:
    {
        type: 'create' | 'update';
        data?: any;
    }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema)
    })
    const onSubmit = handleSubmit(data => {
        console.log(data);
    })
    return (
        <form className='flex flex-col gap-2 ' onSubmit={onSubmit}>
            <h1 className='text-xl font-semibold'>Create a New Assignment</h1>
            <span className='text-sm text-gray-400 font-medium'>Authentication Information</span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField label='Username' name='username' defaultValue={data?.username} register={register} error={errors.username} />
                <InputField label='Email' name='email' defaultValue={data?.email} register={register} error={errors.email} />
                <InputField type='password' label='Password' name='password' defaultValue={data?.password} register={register} error={errors.password} />
            </div>
            <span className='text-sm text-gray-400 font-medium'>Personal Information</span>
            <div className="flex justify-between flex-wrap gap-2">
                <InputField label='First  Name' name='firstName' defaultValue={data?.firstName} register={register} error={errors.firstName} />
                <InputField label='Last Name' name='lastName' defaultValue={data?.lastName} register={register} error={errors.lastName} />
                <InputField label='Phone' name='password' defaultValue={data?.password} register={register} error={errors.password} />
                <InputField label='Address' name='Address' defaultValue={data?.address} register={register} error={errors.address} />
                <InputField label='Blood Type' name='bloodType' defaultValue={data?.bloodType} register={register} error={errors.bloodType} />
                <InputField type='date' label='Birthday' name='birthday' defaultValue={data?.birthday} register={register} error={errors.birthday} />


                <div className="flex flex-col gap-2 w-full md:w-1/4">
                    <label className='text-sm text-gray-400'>Sex</label>
                    <select className={`border-2 border-gray-300 rounded-md p-2 w-full text-sm ${errors?.sex?.message ? 'border-red-500' : ''} {...register('sex')}`} defaultValue={data?.sex}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    {errors?.sex?.message && <p className='text-xs text-red-400'>{errors?.sex?.message.toString()}</p>}
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
                    <label htmlFor='img' className='text-sm text-gray-400 flex items-center gap-2 cursor-pointer'>
                        <Image src='/upload.png' alt='' width={28} height={28} />
                        <span>Upload a photo</span>
                    </label>
                    <input id='img' className='hidden' type="file" {...register('img')} />
                    {errors?.img?.message && <p className='text-xs text-red-400'>{errors?.img?.message.toString()}</p>}
                </div>
            </div>
            <button className='bg-blue-400 text-white p-2 rounded-md'>{type === 'create' ? 'Create' : 'Update'}</button>
        </form>
    )
}

export default AssignmentForm