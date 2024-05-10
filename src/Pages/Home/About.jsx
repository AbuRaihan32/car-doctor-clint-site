import parson from "../../../public/assets/images/about_us/person.jpg";
import parts from "../../../public/assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row p-14">
        <div className="lg:w-1/2 relative h-[400px]">
          <img
            src={parson}
            className="rounded-lg shadow-2xl h-[80%] w-[80%] left-0"
          />
          <img
            src={parts}
            className="max-w-sm rounded-lg shadow-2xl h-1/2 w-1/2 right-5 top-1/2 absolute border-8 border-white"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold text-orange-600">About Us</h1>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="btn bg-orange-600 text-white hover:text-black">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
