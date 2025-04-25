// src/pages/HomePage.tsx
import { Container } from "@mui/material";
import Header from "../../components/Layout/Header";
import HeroSection from "../../components/Home/HeroSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <HeroSection />
        {/* 👇 ادامه کامپوننت‌های صفحه اصلی */}
      </Container>
    </>
  );
};

export default HomePage;
