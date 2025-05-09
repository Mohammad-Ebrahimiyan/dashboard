import Banner from "./Banner";
import { bikeAndSkateBannerData } from "../../../data/bikeAndSkateBannerData"; 

const BikeAndSkateBanner = () => {
  return (
    <Banner
      image={bikeAndSkateBannerData.image}  
      subtitle={bikeAndSkateBannerData.subtitle}
      title={bikeAndSkateBannerData.title}
      buttonText={bikeAndSkateBannerData.buttonText}
    />
  );
};

export default BikeAndSkateBanner;
