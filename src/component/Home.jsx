import React, { useState } from "react";
import { Link } from "react-router-dom";
import video from "../../images/video.mp4";
import SuccessStories from "./SuccessStories";
import img1 from "./../../images/h1-img.png"
import img2 from "./../../images/Home1.png"
import img3 from "./../../images/home2.png"
import img4 from "./../../images/home3.png"
import img5 from "./../../images/home4.png"
import img6 from "./../../images/home5.png"
import img7 from "./../../images/home6.png"
import img8 from "./../../images/VegetableInBasketIcon.svg"
import img9 from "./../../images/ResearchIcon.svg"
import img10 from "./../../images/home15.png"
import img11 from "./../../images/home16.png"
import img12 from "./../../images/home17.png"
import img13 from "./../../images/home18.png"
import img14 from "./../../images/home11.png"
import img15 from "./../../images/home12.png"
import img16 from "./../../images/home13.png"
import img17 from "./../../images/home14.png"
import img18 from "./../../images/home19.png"
import img19 from "./../../images/home20.png"
import img20 from "./../../images/home21.png"
import img21 from "./../../images/home22.png"

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="vid">
      <div className="vid-container">
        <video
          src={video}
          controls
          width="880"
          height="465"
          onPlay={handlePlay}
          onPause={handlePause}
        />
        {!isPlaying && (
          <div className="vid-text">Redefining sustainable food production.</div>
        )}
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          WELCOME TO OUR STATE-OF-THE-ART AQUAPONICS FACILITY
          <img src={img1} alt="" />
        </div>
        <div className="hero-image">
          <img src={img2} alt="Image" />
        </div>
        <div className="header-cul">
          <h2>Cultivating a greener Future.</h2>
        </div>
        <div className="disbut">
          <Link to="/services">
            <button>Discover More</button>
          </Link>
        </div>
      </section>
      
      <section className="features py-8">
  <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
    <div className="feature bg-white p-4 rounded-lg shadow-md text-center">
      <div className="faci text-yellow-400 mb-2">Facility-1</div>
      <h3 className="text-xl font-semibold">Sustainable Practices</h3>
      <img src={img3} alt="Sustainable Practices" className="mt-2 mx-auto w-24 h-24 object-cover" />
    </div>
    <div className="feature bg-white p-4 rounded-lg shadow-md text-center">
      <div className="faci text-yellow-400 mb-2">Facility-2</div>
      <h3 className="text-xl font-semibold">Automated Monitoring System</h3>
      <img src={img4} alt="Automated Monitoring System" className="mt-2 mx-auto w-24 h-24 object-cover" />
    </div>
    <div className="feature bg-white p-4 rounded-lg shadow-md text-center">
      <div className="faci text-yellow-400 mb-2">Facility-3</div>
      <h3 className="text-xl font-semibold">Data Analytics and Visualization</h3>
      <img src={img5} alt="Data Analytics and Visualization" className="mt-2 mx-auto w-24 h-24 object-cover" />
    </div>
  </div>
</section>

<div className="second-block-home py-8">
  <div className="container mx-auto flex flex-col lg:flex-row items-center">
    <div className="imageContainer relative flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
      <img src={img6} alt="Fish Tank" className="mainImage w-72 h-72 lg:w-96 lg:h-96 rounded-full border-4 border-white shadow-md" />
      <img src={img7} alt="Plants" className="subImage absolute bottom-0  left-1/6 transform -translate-x-1/2 w-32 h-32 lg:w-48 lg:h-48 rounded-full border-5 border-white shadow-md" />
    </div>
    <div className="textContainer text-center lg:text-left">
      <p className="introductions text-orange-500 text-xl font-semibold">Our Introductions</p>
      <h1 className="title text-2xl lg:text-4xl font-bold mt-2">AquaGenetics AI Labs</h1>
      <p className="subtitle text-lg mt-2">Our fish tanks and biofilters work in harmony to provide nutrient-rich water for the plants</p>
      <p className="description mt-4 text-gray-600">It represents a holistic approach to food production, combining the best aspects of aquaculture and hydroponics. This system leverages the natural biological processes of fish and plants to create a closed-loop, efficient, and environmentally friendly method of food production.</p>
      <div className="features flex flex-col lg:flex-row justify-center lg:justify-start gap-4 mt-4">
        <div className="featureItem flex items-center gap-2">
          <img src={img8} alt="Chemical Free" className="featureIcon w-12 h-12" />
          <p>Chemical free vegetables</p>
        </div>
        <div className="featureItem flex items-center gap-2">
          <img src={img9} alt="Genomic Research" className="featureIcon w-12 h-12" />
          <p>Genomic Research</p>
        </div>
      </div>
      <ul className="list list-disc list-inside mt-4 text-gray-600">
        <li><span className="text-green-500">&#x2705;</span> Our technology is not just random innovation. It’s based on years of scientific research and real-world applications.</li>
        <li><span className="text-green-500">&#x2705;</span> As pioneers in this field, we are the first to bring such a comprehensive and integrated approach to food production on the internet.</li>
      </ul>
      <button className="button mt-4 bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700">Discover More</button>
    </div>
  </div>
</div>

<div className="features-section py-8">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Our Features</h2>
    <h3 className="text-xl font-semibold mb-6">Key technologies</h3>
    <div className="tech-cards py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
      <div className="card bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center w-full max-w-xs">
        <img src={img10} alt="Soilless farming" className="w-full h-40 object-cover mb-4" />
        <h4 className="text-xl font-semibold mb-2">Soilless Farming</h4>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Read More</button>
      </div>
      <div className="card bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center w-full max-w-xs">
        <img src={img11} alt="Deep Water Culture" className="w-full h-40 object-cover mb-4" />
        <h4 className="text-xl font-semibold mb-2">Deep Water Culture</h4>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Read More</button>
      </div>
      <div className="card bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center w-full max-w-xs">
        <img src={img12} alt="Year-Round Production" className="w-full h-40 object-cover mb-4" />
        <h4 className="text-xl font-semibold mb-2">Year-Round Production</h4>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Read More</button>
      </div>
      <div className="card bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center w-full max-w-xs">
        <img src={img13} alt="Genomics Integration" className="w-full h-40 object-cover mb-4" />
        <h4 className="text-xl font-semibold mb-2">Genomics Integration</h4>
        <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Read More</button>
      </div>
    </div>
  </div>
</div>

</div>

  



        <div className="footer-l">
          <button>Aquaponics</button>
          <button>Ongoing Projects</button>
          <button>Precision Nutrition System™</button>
          <button>New technologies</button>
        </div>
      </div>
      
      <section className="fourth-home">
        <div className="title-4">Explore Project</div>
        <div className="introduction-4">Nature's harmony, technology's efficiency.</div>
        <div className="exp-img">
          <VideoComponent />
          <div className="img-4">
            <div className="img1">
              <img src={img14} alt="" />
              <div className="imgtext">
                <h4>Grow Bed and Plant System</h4>
              </div>
            </div>
            <div className="img2">
              <img src={img15} alt="" />
              <div className="imgtext">
                <h4>Harvesting and Processing Area</h4>
              </div>
            </div>
            <div className="img2">
              <img src={img16} alt="" />
              <div className="imgtext">
                <h4>Automated Monitoring System</h4>
              </div>
            </div>
            <div className="img2">
              <img src={img17} alt="" />
              <div className="imgtext">
                <h4>Fish Tanks and Biofilters</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fifth-home">
        <div className="img5">
          <span
            style={{
              fontFamily: "Covered By Your Grace, sans-serif",
              color: "#EEC044",
              fontSize: "24px",
            }}
          >
            Fish Tanks and Biofilters
          </span>
          <img src={img18} alt="" />
        </div>
        <div className="five-text">
          <div className="title-5">
            <h1 className="five-h4">Overview of the center’s mission</h1>
          </div>
          <div className="para-5">
            There are many variations of passages of available but the majority
            have suffered alteration in some form by injected humor or random
            word which don't look even.
          </div>
          <div className="five-h4"><span class="green-tick">&#x2705;</span>Quality Organic Vegetables</div>
          <div className="five-p">
            There are variation You need to be sure there is anything hidden in
            the middle of text.
          </div>
          <div className="five-h4"><span class="green-tick">&#x2705;</span>Sustainable food production.</div>
          <div className="five-p">
            There are variation You need to be sure there is anything hidden in
            the middle of text.
          </div>
          <div className="five-h4"><span class="green-tick">&#x2705;</span>Cost Efficiency</div>
          <div className="five-p">
            There are variation You need to be sure there is anything hidden in
            the middle of text.
          </div>
          <button className="button">Discover More</button>
        </div>
      </div>

      <SuccessStories />

      <section className="news-articles">
        <h2>From The Blog</h2>
        <h1>News & Articles</h1>
        <div className="articles-container">
          <div className="article">
            <img src={img19} alt="Sustainable farming" />
            <div className="article-content">
              <div className="article-date">05 July 2022</div>
              <div className="article-author">By Ron Martin</div>
              <h3>Sustainable farming through aquaponics—where fish and plants thrive together.</h3>
            </div>
          </div>
          <div className="article">
            <img src={img20} alt="Advanced technologies" />
            <div className="article-content">
              <div className="article-date">19 June 2022</div>
              <div className="article-author">By Jane Doe</div>
              <h3>Advanced technologies in genomic research enhancing crop yields.</h3>
            </div>
          </div>
          <div className="article">
            <img src={img21} alt="Year-round production" />
            <div className="article-content">
              <div className="article-date">10 May 2022</div>
              <div className="article-author">By John Smith</div>
              <h3>Year-round production with deep water culture systems.</h3>
            </div>
          </div>
        </div>
        <button className="button">Read More Articles</button>
      </section>
    </>
  );
}

export default Home;
