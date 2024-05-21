import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import Contact from "./Home/Contact";
import Feature from "./Home/Feature";
import RecomentionCard from "./Home/RecomentionCard";
import ShareMenu from "./Home/ShareMenu";
import Swipper from "./Home/Swipper";
import Testimonials from "./Home/Testimonials";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
           <Swipper></Swipper>
           <ShareMenu></ShareMenu>
           <Contact></Contact>
           <RecomentionCard></RecomentionCard>
           <Feature></Feature>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;