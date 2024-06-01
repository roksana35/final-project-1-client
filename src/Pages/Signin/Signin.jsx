import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignin from "../../Share/GoogleSignin";


const Signin = () => {
  const axiosPublic= useAxiosPublic();
  const navigate =useNavigate();
  

  const { signUpUser,updateProfileUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signUpUser(data.email, data.password)
      .then((result) => {
        const userinfo = result.user;
        console.log(userinfo);
        updateProfileUser(data.name,data.photo)
        .then(()=>{
            console.log('user update successfully')
            const userInfo={
              name:data.name,
              email:data.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
              if(res.data.insertedId){
                console.log('user added to the database')
                reset();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'User created successfully.',
                  showConfirmButton: false,
                  timer: 1500
              });
              navigate('/');
              }
            })
            

        }).catch(error=>{
            console.log(error)
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photoURL</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                
                placeholder="PhotoURL"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{6,}$/,
                })}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">password is required</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  {" "}
                  Password must not exceed 20 characters
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be at least 6 characters long
                </p>
              )}

              {errors.password?.type === "pattern" && (
                 <p className="text-red-600">
                 Password must include at least one uppercase
                 letter, one lowercase letter, one digit, and one
                 special character
               </p>
             )}
               
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </div>
          </form>
          <div className='mx-auto mt-2 mb-4'>
              <p className='mb-2'>Already have a Account? <Link to='/login' className="text-blue-800 font-medium"> Then login </Link> </p>
              <GoogleSignin></GoogleSignin>
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
