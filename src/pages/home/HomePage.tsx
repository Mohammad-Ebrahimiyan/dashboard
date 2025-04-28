// src/pages/HomePage.tsx
import { Container } from "@mui/material";
import Header from "../../components/Layout/Header";
import HeroSection from "../../components/Home/HeroSection";
import PromoProducts from "../../components/Home/PromoProducts";
import AerobicBanner from "../../components/Home/AerobicBanner";
import  SpecialOffers from '../../components/Home/SpecialOffersSection'
const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <HeroSection />
        <PromoProducts />
        <AerobicBanner /> 
        <SpecialOffers />
      </Container>
    </>
  );
};

export default HomePage;
