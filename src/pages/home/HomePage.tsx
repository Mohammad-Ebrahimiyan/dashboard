import { Container } from "@mui/material";
import Header from "../../components/Layout/Header/Header";
import HeroSection from "../../components/Home/HeroSection";
import PromoProducts from "../../components/Home/PromoProducts";
import AerobicBanner from "../../components/Home/AerobicBanner";
import SpecialOffers from "../../components/Home/SpecialOffersSection";
import SportShoesSection from '../../components/Home/SportShoesSection';
import BikeAndSkateBanner from "../../components/Home/BikeAndSkateBanner";
import SpecialOfferSection from "../../components/Home/SpecialOfferSection";
import LatestProductsSection from "../../components/Home/LatestProductsSection";
import CampingBanner from "../../components/Home/CampingBanner";
import NewsSection from "../../components/Home/NewsSection";
import ServiceHighlights from "../../components/Home/ServiceHighlights";
import Footer from "../../components/Layout/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <HeroSection />
        <PromoProducts />
        <AerobicBanner />
        <SpecialOffers />
        <SportShoesSection />
        <BikeAndSkateBanner />
        <SpecialOfferSection />
        <LatestProductsSection />
        <CampingBanner />
        <NewsSection />
        <ServiceHighlights />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
