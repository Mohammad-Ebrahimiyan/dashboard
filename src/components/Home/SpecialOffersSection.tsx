import PromoSection from "./PromoSection";
import { specialOfferProducts } from "../../data/specialOffersData";

const SpecialOffers = () => {
  return (
    <PromoSection
      title="تخفیفات ویژه"
      description=""
      buttonText="مشاهده همه"
      products={specialOfferProducts}
      backgroundColor="#FFF2EF" 
      titleBackground={true}
      titleAlign="center"
      isSpecialOffers={true}
    />
  );
};

export default SpecialOffers;
