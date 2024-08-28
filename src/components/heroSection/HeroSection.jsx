import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="w-full h-[30rem]">
      <Link to={"/login"}>
        <img
          src="../../public/img/banner/Banner.png"
          alt="Banner de promoción"
          className="w-full h-full object-cover"
        />
      </Link>
    </div>
  );
};

export default HeroSection;
