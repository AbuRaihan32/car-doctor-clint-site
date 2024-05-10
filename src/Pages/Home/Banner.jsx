import banner1 from "../../../public/assets/images/banner/5.jpg";
import banner2 from "../../../public/assets/images/banner/2.jpg";
import banner3 from "../../../public/assets/images/banner/3.jpg";
import banner4 from "../../../public/assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[calc(100vh-30vh)] rounded-3xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full object-cover " />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151503] flex items-center transform h-full">
          <div className="text-white md:w-[45%] p-5 md:pl-24 space-y-4">
            <h1 className="text-3xl md:text-6xl">Affordable Price For Car Servicing</h1>
            <p className="text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-active btn-secondary bg-orange-600 mr-5">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle bg-orange-600 mr-7">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-orange-600 ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full object-cover" />

        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151503] flex items-center transform h-full">
          <div className="text-white w-[45%] pl-24 space-y-4">
            <h1 className="text-6xl">Affordable Price For Car Servicing</h1>
            <p className="text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-active btn-secondary bg-orange-600 mr-5">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning">
              Latest Project
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle  bg-orange-600 mr-7">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-orange-600 ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full object-cover" />

        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151503] flex items-center transform h-full">
          <div className="text-white w-[45%] pl-24 space-y-4">
            <h1 className="text-6xl">Affordable Price For Car Servicing</h1>
            <p className="text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-active btn-secondary bg-orange-600 mr-5">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle  bg-orange-600 mr-7">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle  bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full object-cover" />

        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151503] flex items-center transform h-full">
          <div className="text-white w-[45%] pl-24 space-y-4">
            <h1 className="text-6xl">Affordable Price For Car Servicing</h1>
            <p className="text-xl">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <button className="btn btn-active btn-secondary bg-orange-600 mr-5">
              Discover More
            </button>
            <button className="btn btn-outline btn-warning">
              Latest Project
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle bg-orange-600 mr-7">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle  bg-orange-600">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
