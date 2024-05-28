import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";


const FoodCard = ({item}) => {
    const {name,image,price,recipe,_id}=item;
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure();
    const navigate=useNavigate();
    const location=useLocation();
    const handleAddToCart=food=>{
      console.log(food,user)
      if(user && user.email){
        console.log(user.email)
        const cartItem={
          menuId:_id,
          email:user.email,
          name,image,price

        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name},added to database`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })

      }else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to able add to cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location}})
          }
        });
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className="absolute bg-black text-white px-3 py-2 mr-2 right-2 mt-3">{price}</p>
  <div className="card-body flex flex-col justify-center items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">ADD TO CHART</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;