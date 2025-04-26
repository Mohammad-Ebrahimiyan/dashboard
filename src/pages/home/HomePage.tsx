// src/pages/HomePage.tsx
import { Container } from "@mui/material";
import Header from "../../components/Layout/Header";
import HeroSection from "../../components/Home/HeroSection";
import PromoProducts from "../../components/Home/PromoProducts";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <HeroSection />
        <PromoProducts /> 
      </Container>
    </>
  );
};

export default HomePage;
