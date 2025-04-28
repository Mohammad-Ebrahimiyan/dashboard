// src/components/Home/PromoSection.tsx
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid";

import { styled } from "@mui/system";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";

interface ProductItem {
  image: string;
  title: string;
  discount: string;
}

interface PromoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  products: ProductItem[];
}

const PromoBox = styled(Box)(({ theme }) => ({
  padding: "60px 0",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const ProductCard = styled(Box)(({ theme }) => ({
  borderRadius: 20,
  backgroundColor: theme.palette.background.paper,
  overflow: "hidden",
  position: "relative",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
}));

const ProductImage = styled("img")({
  width: "100%",
  height: "auto",
  objectFit: "cover",
});

const DiscountTag = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: theme.palette.text.primary,
  color: "#fff",
  padding: "20px",
  fontWeight: "bold",
  fontSize: "1rem",
  direction: "rtl",
  borderTopLeftRadius: 40,
  borderBottomRightRadius: 40,
}));

export const PromoSection = ({
  title,
  description,
  buttonText,
  products,
}: PromoSectionProps) => {
  return (
    <PromoBox>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4} sx={{ ml: { md: "auto" } }}>
          <Typography variant="h5" fontWeight="bold" color="text.primary" mb={2}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={3}>
            {description}
          </Typography>
          <Button variant="contained" color="warning" sx={{ borderRadius: 2, px: 4 }}>
            {buttonText}
          </Button>
        </Grid>

        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard>
              <ProductImage src={product.image} alt={product.title} />
              <DiscountTag>
                {product.title} <br />
                <span style={{ color: cssMainColors.crimsonRed }}>
                  {product.discount}
                </span>
              </DiscountTag>
            </ProductCard>
          </Grid>
        ))}
      </Grid>
    </PromoBox>
  );
};

export default PromoSection;
