import ShareSection from "./ShareSection";
import img1 from '../../assets/home/slide1.jpg'

const RecomentionCard = () => {
    return (
        <section className="mb-12">
            <ShareSection
            heading={"chef recommends"}
            subheading={"should try"}
            ></ShareSection>
            <div className="md:flex gap-8 ">
            <div className="card  bg-base-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img1} alt="Shoes" className="rounded-xl h-[300px] w-[400px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce,egges,cheese,chicken,brest fllets</p>
    <div className="card-actions">
      <button className="btn text-yellow-500 bg-slate-200 border-b-2 border-yellow-500">ADD TO CHART</button>
    </div>
  </div>
</div>
{/* card 2 */}
<div className="card  bg-base-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img1} alt="Shoes" className="rounded-xl h-[300px] w-[400px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce,egges,cheese,chicken,brest fllets</p>
    <div className="card-actions">
      <button className="btn text-yellow-500 bg-slate-200 border-b-2 border-yellow-500">ADD TO CHART</button>
    </div>
  </div>
</div>
<div className="card  bg-base-200 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img1} alt="Shoes" className="rounded-xl h-[300px] w-[400px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Caeser Salad</h2>
    <p>Lettuce,egges,cheese,chicken,brest fllets</p>
    <div className="card-actions">
      <button className="btn text-yellow-500 bg-slate-200 border-b-2 border-yellow-500">ADD TO CHART</button>
    </div>
  </div>
</div>

            </div>
            
        </section>
    );
};

export default RecomentionCard;