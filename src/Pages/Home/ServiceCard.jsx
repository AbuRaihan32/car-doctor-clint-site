import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, title, price, img } = service;

  return (
    <div className="card bg-base-100 shadow-xl border">
      <figure className="px-10 pt-10">
        <img src={img} alt="cars" className="rounded-xl h-56" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-between w-full">
          <p className="text-orange-600 text-xl font-bold"> Price : ${price}</p>
          <Link to={`/checkout/${_id}`} className="text-orange-600">
            <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;
