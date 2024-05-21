import { Helmet } from "react-helmet-async";
import Cover from "../../Share/Cover";
import menuImage from '../../assets/menu/banner3.jpg'


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
            img={menuImage} title={'our menu'} description={'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi'}
            ></Cover>
        </div>
    );
};

export default Menu;