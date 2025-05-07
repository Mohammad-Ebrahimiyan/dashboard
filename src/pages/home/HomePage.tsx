import { Container } from "@mui/material";
import { Header,Footer } from "../../components";
import {
  HeroSection,
  PromoProducts,
  AerobicBanner,
  SpecialOffersSection,
  SportShoesSection,
  BikeAndSkateBanner,
  SpecialOfferSection,
  LatestProductsSection,
  CampingBanner,
  NewsSection,
  ServiceHighlights
} from '../../components/Home/index'

const HomePage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <HeroSection />
        <PromoProducts />
        <AerobicBanner />
        <SpecialOffersSection />
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
