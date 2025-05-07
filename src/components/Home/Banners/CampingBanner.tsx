import Banner from "./Banner";
import { campingBannerData } from "../../../data/campingBannerData";

const CampingBanner = () => {
  return (
    <Banner
      image={campingBannerData.image}
      subtitle={campingBannerData.subtitle}
      title={campingBannerData.title}
      buttonText={campingBannerData.buttonText}
    />
  );
};

export default CampingBanner;
