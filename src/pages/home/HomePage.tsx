// src/pages/HomePage.tsx
import { Container } from "@mui/material";
import Header from "../../components/Layout/Header";
import HeroSection from "../../components/Home/HeroSection";
import PromoSection from "../../components/Home/PromoSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <HeroSection />
        <PromoSection />
      </Container>
    </>
  );
};

export default HomePage;
