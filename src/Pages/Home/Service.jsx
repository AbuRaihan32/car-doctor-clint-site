import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Service = () => {
  const [service, setService] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/services").then((data) => setService(data.data));
  }, []);

  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-orange-600">Services</h1>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-7 mb-14">
        {service.map((dt) => (
          <ServiceCard key={dt._id} service={dt}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
