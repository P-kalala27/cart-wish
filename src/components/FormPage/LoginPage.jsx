
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import Button from "../common/Button";


const schema = z.object({
  email:z.string().email().min(3),
  password:z.string().min(8, {message: "Password must contain at least 8 character(s)"})
})
const LoginPage = () => {
  
  // const passwordRef = useRef(null) for hide and show password
  
  const {register, handleSubmit, formState: {errors}} = useForm({resolver : zodResolver(schema)})
  
  const onSubmit = FormData => console.log(FormData)

  return (
    <div className="justify-center flex w-1/3 mx-auto
     space-y-32 bg-white  rounded-xl shadow-lg mt-8 py-8 px-8">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-between items-center p-7 gap-4">
          <div className="flex justify-center items-center py-5">
            <h2 className="text-2xl font-montserrat font-semibold">Login</h2>
          </div>
          <div className="flex flex-col justify-center items-center
           gap-5 py-7">
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-palanquin font-medium text-xl">Email</label>
              <input
               type="email"
               id='email'
               placeholder="enter your email" 
               className=" bg-slate-100 px-4 py-2 text-xl rounded-sm outline-none border"
               {...register("email")}
                />
                {
                  errors.email && (
                  <em className="text-red-500 py-1"> 
                  {errors.email.message}
                  </em>)
                }
                
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password"  className="font-palanquin font-medium text-xl">password</label>
              <input 
              type="password"
              id="password"
              placeholder="enter your password"
              className="bg-slate-100 px-4 py-2 text-xl rounded-sm border outline-none"
              {...register("password")}/>
               {
                  errors.password && (<em className="text-red-500 py-1"> 
                  {errors.password.message}
                  </em>)
                }
            </div>
          </div>
          <div className="">
          <Button title={"Submit"} link={"/"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
