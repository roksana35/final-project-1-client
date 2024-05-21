import ShareSection from "./ShareSection";
import featureimage from '../../assets/home/featured.jpg'
import './feature.css'
const Feature = () => {
    return (
        <section className="feature-item bg-fixed    text-white mb-12">
            <div className="bg-black bg-opacity-55 py-12">
            <ShareSection
            heading='from our menu'
            subheading='should try'
            ></ShareSection>
            <div className="md:flex justify-center  items-center gap-14 px-32 py-24">
                <div>
                    <img src={featureimage} alt="" />
                </div>
                <div>
                    <p>May 21 2024</p>
                    <p className="uppercase text-xl">where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero sapiente doloribus labore explicabo nostrum. Neque maxime dolor nisi officia in ex sapiente consequatur laudantium facilis nobis dicta non fuga veritatis corporis, accusamus similique velit. Libero maxime dolorum reprehenderit beatae nostrum dolor odit qui provident!</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white">READ MORE</button>
                </div>
            </div>

            </div>
           
            

        </section>
    );
};

export default Feature;