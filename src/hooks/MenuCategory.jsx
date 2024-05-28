

import { Link } from "react-router-dom";
import MenuItem from "../Pages/Home/MenuItem";
import Cover from "../Share/Cover";


const MenuCategory = ({items,img,title}) => {
    
    return (
        <div className="mt-8">
             {title && <Cover
            img={img} title={title} 
            ></Cover>}
            <div className="grid md:grid-cols-2  gap-10 mt-10" >
                {
                    items.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
                 

            </div>
            <Link to={`/order/${title}`} >
            <button className="btn btn-outline border-0 border-b-4  mt-6 mb-6 mx-auto">Order Your Fvorite Food</button>
            </Link>
           
        
          
        </div>
    );
};

export default MenuCategory;