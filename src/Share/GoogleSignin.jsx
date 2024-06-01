import { BsGoogle } from "react-icons/bs";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const GoogleSignin = () => {
    const {googleLogIn}=useAuth();
    const axiosPublic=useAxiosPublic();
    const handleGoogleLogIn=()=>{
        googleLogIn()
        .then(res=>{
            console.log(res.user)
            const socialuserInfo ={
                email:res.user.email,
                name:res.user.displayName
            }
            axiosPublic.post('/users',socialuserInfo)
            .then(res=>{
                console.log(res.data )
            })

        })
    }
    return (
        <div>
            <div>
            <button onClick={handleGoogleLogIn} className='btn btn-outline'><BsGoogle></BsGoogle> Continue With Google</button>
            </div>
        </div>
    );
};

export default GoogleSignin;