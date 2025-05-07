import Banner from "./Banner";
import { aerobicBannerData } from "../../../data/aerobicBannerData";

const AerobicBanner = () => {
  return (
    <Banner
      image={aerobicBannerData.image}  
      subtitle={aerobicBannerData.subtitle}
      title={aerobicBannerData.title}
      buttonText={aerobicBannerData.buttonText}
    />
  );
};

export default AerobicBanner;
