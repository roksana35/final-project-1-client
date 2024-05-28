import { Helmet } from "react-helmet-async";
import Cover from "../../Share/Cover";
import menuImage from '../../assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import ShareSection from "../Home/ShareSection";
import MenuCategory from "../../hooks/MenuCategory";
import dessertImage from "../../assets/menu/dessert-bg.jpeg"
import saladImage from "../../assets/menu/salad-bg.jpg"
import pizzaimage from "../../assets/menu/pizza-bg.jpg"
import soupImage from "../../assets/menu/soup-bg.jpg"

const Menu = () => {
    const [menu]=useMenu();
    const offered=menu.filter(item=>item.category === 'offered')
    const salad=menu.filter(item=>item.category === 'salad')
    const soup=menu.filter(item=>item.category === 'soup')
    const dessert=menu.filter(item=>item.category === 'dessert')
    const pizza=menu.filter(item=>item.category === 'pizza')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
            img={menuImage} title={'our menu'} 
            ></Cover>
            <ShareSection subheading="Don't miss" heading="Today's offer"></ShareSection>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={'dessert'} img={dessertImage}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladImage}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaimage}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupImage}></MenuCategory>
        </div>
    );
};

export default Menu;