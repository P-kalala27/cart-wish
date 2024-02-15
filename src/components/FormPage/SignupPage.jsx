import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import user from '../../assets/images/user.webp';


const schema = z.object({
    name:z.string().min(3, {message: "name must be 3 or more characters"}),
    email:z.string().email().min(3),
    address:z.string().min(15,{message:"file the right address with 15 characters"}),
    password:z.string().min(8),
    confirmPassword:z.string()
}).refine(data => data.password === data.confirmPassword , {
    message:"confirm password doesn't match with password !!!",
    path:['confirmPassword']
})

const SignupPage = () => {

    const [profile, setProfile]= useState(null)

    const{register, handleSubmit, formState:{errors}}= useForm({resolver:zodResolver(schema)})

    const onSubmit = (FormData) => console.log(FormData);
    console.log(profile);
  return (
    <section className='flex justify-center items-start
     bg-white lg:w-[600px]  mx-auto shadow-lg'>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-center py-5 text-pretty
                 leading-8 text-2xl font-montserrat font-medium'>Sign Up</h2>

                <div className='flex flex-col items-center '>
                    <div className=' flex py-4'>
                        <img src={profile? URL.createObjectURL(profile) :user} id='file-ip-1-preview'
                         className='w-32 h-32 rounded-full' />
                    </div>
                    <label htmlFor='file-ip-1'
                     className='flex bg-indigo-600 text-white
                      py-2 px-2 text-sm uppercase rounded-lg 
                      mb-6 font-montserrat font-semibold cursor-pointer w-fit'>
                        Upload Image
                    </label>
                    <input type='file' id='file-ip-1'
                    onChange={e => setProfile(e.target.files[0])}
                    className='hidden' />
                </div>

                {/* Form Inputs */}
                <div className=' w-full grid grid-cols-1 gap-5 mb-3'>
                    <div className='flex lg:flex-row gap-5'>
                    <div className='w-full flex flex-col
                    justify-around gap-2'>
                        <label htmlFor='name' className='text-xl font-palanquin font-medium'>Name</label>
                        <input
                            id='name'
                            className='px-2 py-1 outline-none
                             rounded text-xl border border-gray-300'
                            type='text'
                            placeholder='Enter your name'
                            {...register('name')}
                        />
                        {
                            errors.name && (
                            <em className="text-red-500 py-1"> 
                        { errors.name.message}
                            </em>)
                         }
                    </div>

                    <div className='w-full block flex-col 
                    justify-around'>
                        <label htmlFor='email' className='text-xl font-palanquin font-medium'>Email</label>
                        <input
                            id='email'
                            className='px-2 py-1 outline-none
                             rounded-sm text-xl border border-gray-300'
                            type='email'
                            placeholder='Enter your email address'
                            {...register('email')}
                        />
                        {
                            errors.email && (
                            <em className="text-red-500 py-1"> 
                        { errors.email.message}
                            </em>)
                         }
                    </div>
                    </div>

                    <div className='flex lg:flex-row gap-5'>
                    <div className='w-full flex flex-col
                    justify-around'>
                        <label htmlFor='password' className='text-xl font-palanquin font-medium'>Password</label>
                        <input
                            id='password'
                            className='px-2 py-1 outline-none
                             rounded text-xl border border-gray-300'
                            type='password'
                            placeholder='Enter your password'
                            {...register('password')}
                        />
                        {
                            errors.password && (
                            <em className="text-red-500 py-1"> 
                        { errors.password.message}
                            </em>)
                         }
                    </div>

                    <div className='w-full flex flex-col
                    justify-around'>
                        <label htmlFor='cpassword' className='text-xl font-palanquin font-medium'>Confirm Password</label>
                        <input
                            id='cpassword'
                            className='px-2 py-1 outline-none
                             rounded text-xl border border-gray-300'
                            type='password'
                            placeholder='Enter confirm password'
                            {...register('confirmPassword')}
                        />
                        {
                            errors.confirmPassword && (
                            <em className="text-red-500 py-1"> 
                        { errors.confirmPassword.message}
                            </em>)
                         }
                    </div>

                    </div>
                    
                    <div className=' flex flex-col'>
                        <label htmlFor='address' className='text-xl font-palanquin font-medium'>Delivery Address</label>
                        <textarea
                            id='address'
                            className='rounded-md text-xl h-32 outline-none border
                             border-gray-300 font-medium resize-none px-2 py-1'
                            placeholder='Enter delivery address'
                            {...register('address')}
                        />
                        {
                            errors.address && (
                            <em className="text-red-500 py-1"> 
                            { errors.address.message}
                            </em>)
                         }
                    </div>
                </div>

                <button className='w-full bg-indigo-500 text-white px-2 py-3 rounded-sm' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
}

export default SignupPage