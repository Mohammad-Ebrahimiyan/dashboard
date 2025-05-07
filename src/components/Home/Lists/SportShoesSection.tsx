import { Box, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";
import { SportShoesItem } from "../../../types/sportShoesItem";
import { sportShoesData } from "../../../data/sportShoesData"; 

const Title = styled(Typography)(() => ({
  background: cssMainColors.primary,
  color: "#fff",
  padding: "8px",
  borderRadius: "8px",
  textAlign: "center",
  marginBottom: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
}));

const ProductCard = ({ product }: { product: SportShoesItem }) => {
  return (
    <Box
      sx={{
        borderRadius: 12,
        backgroundColor: "white",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: cssMainColors.crimsonRed,
            color: "#fff",
            padding: "5px 10px",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "4px",
          }}
        >
          {product.discount}
        </Box>
      </Box>

      <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2 }}>
        {product.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
        {product.price}
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
        از سایز: {product.sizes?.join(", ")}
      </Typography>

      <Button variant="contained" color="primary" size="small">
        مشاهده جزئیات
      </Button>
    </Box>
  );
};

const SportShoesSection = () => {
  return (
    <Box sx={{ marginBottom: "60px" }}>
      <Title variant="h5" fontWeight="bold">
        جدیدترین کفش های ورزشی
      </Title>
      <Grid container spacing={4} justifyContent="center">
        {sportShoesData.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SportShoesSection;
