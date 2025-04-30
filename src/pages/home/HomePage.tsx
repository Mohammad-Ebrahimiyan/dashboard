// src/pages/HomePage.tsx
import { Container } from "@mui/material";
import Header from "../../components/Layout/Header";
import HeroSection from "../../components/Home/HeroSection";
import PromoProducts from "../../components/Home/PromoProducts";
import AerobicBanner from "../../components/Home/AerobicBanner";
import SpecialOffers from "../../components/Home/SpecialOffersSection";
import SportShoesSection from '../../components/Home/SportShoesSection';
import BikeAndSkateBanner from "../../components/Home/BikeAndSkateBanner";
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
      </Container>
    </>
  );
};

export default HomePage;
