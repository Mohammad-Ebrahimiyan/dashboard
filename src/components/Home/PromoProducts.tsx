// src/components/Home/PromoProducts.tsx
import PromoSection from "./PromoSection";
import {variant1, variant2} from "../../assets/images/index";

const PromoProducts = () => {
  return (
    <PromoSection
      title="جدید ترین محصولات"
      description="جدیدترین محصولات را با ارسال رایگان تهیه کنید و در سریع‌ترین زمان درب منزل تحویل بگیرید"
      buttonText="مشاهده همه محصولات"
      products={[
        {
          image: variant1,
          title: "جدید ترین تخفیفات فصل برند نایک",
          discount: "۵۰٪ تخفیف",
        },
        {
          image: variant2,
          title: "جدید ترین تخفیفات فصل برند پوما",
          discount: "۵۰٪ تخفیف",
        },
      ]}
    />
  );
};

export default PromoProducts;
