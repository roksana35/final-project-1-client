
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleSignin from '../../Share/GoogleSignin';

const Login = () => {
    
    const {loginUser, googleLogIn}=useContext(AuthContext);
    const [disable,setDisable]=useState(true);
    const navigate=useNavigate();
    const location =useLocation();
    const from = location.state?.from?.pathname || "/";
    // console.log(from)

    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

const handlelogin=event=>{
    event.preventDefault()
    const form =event.target;
    const email =form.email.value;
    const password=form.password.value
    loginUser(email,password)
    .then(result=>{
      console.log(result.user)
      Swal.fire({
        title: "User Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from,{replace:true})
    }).catch(error=>{
      console.log(error.message)
    })
}
const handleCaptcha=(e)=>{
    const user_captcha_value=e.target.value;
       
     

     if (validateCaptcha(user_captcha_value)==true) {
         setDisable(false)
     }

     else {
         setDisable(true)
     }

}


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={handleCaptcha}  type="text" name='captcha' placeholder="captcha" className="input input-bordered" required />
               
                
              </div>
              <div className="form-control mt-6">
                
                <input disabled={disable} type="submit" className='btn btn-primary' value="Login" />
              </div>
            </form>
            <div className='mx-auto mt-2 mb-4'>
              <p className='mb-2'>New Here? <Link to='/signin' className='text-blue-800 font-medium'> Create a Account</Link> </p>
              <GoogleSignin></GoogleSignin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;