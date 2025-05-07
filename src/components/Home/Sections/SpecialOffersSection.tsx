import PromoSection from "../Info/PromoSection";
import { specialOfferProducts } from "../../../data/specialOffersData";

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
         />
  );
};

export default SpecialOffers;
