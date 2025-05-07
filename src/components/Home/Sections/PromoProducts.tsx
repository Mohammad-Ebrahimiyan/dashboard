import PromoSection from "./ProductSection";
import { promoProducts } from "../../../data/promoProductsData";

const PromoProducts = () => {
  return (
    <PromoSection
      title="جدیدترین محصولات"
      description="جدیدترین محصولات را با ارسال رایگان تهیه کنید و در سریع‌ترین زمان درب منزل تحویل بگیرید."
      buttonText="مشاهده همه محصولات"
      products={promoProducts}
       />
  );
};

export default PromoProducts;
