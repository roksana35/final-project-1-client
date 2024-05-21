import { useEffect, useState } from "react";
import ShareSection from "./ShareSection";
import MenuItem from "./MenuItem";


const ShareMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem=data.filter(item=>item.category === 'popular')
            setMenu(popularItem)
        })
    },[])
    return (
        <section className="mb-12 mx-auto">
            <ShareSection
            heading={"from our menu"}
            subheading={"check it out"}
            ></ShareSection>

            <div className="grid md:grid-cols-2  gap-10">
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
                 

            </div>
            <div className="mx-auto">
            <button className="btn btn-outline border-0 border-b-4 md:ml-[520px] mt-12 ">VIEW FULL MENU</button>

            </div>
            
           
        </section>
    );
};

export default ShareMenu;