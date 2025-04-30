import Banner from "./Banner";
import { bikeAndSkateBannerData } from "../../data/bikeAndSkateBannerData"; // وارد کردن داده‌ها

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
