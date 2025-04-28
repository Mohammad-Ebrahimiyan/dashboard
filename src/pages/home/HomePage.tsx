// src/pages/HomePage.tsx
import { Container } from "@mui/material";
import Header from "../../components/Layout/Header";
import HeroSection from "../../components/Home/HeroSection";
import PromoProducts from "../../components/Home/PromoProducts";
import AerobicBanner from "../../components/Home/AerobicBanner";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <HeroSection />
        <PromoProducts />
        <AerobicBanner /> 
      </Container>
    </>
  );
};

export default HomePage;
