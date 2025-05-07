// src/component/Home/ProductCard.tsx
import { Box, Button, Typography } from "@mui/material";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";
import { ProductItem } from "../../../types/productItem";
// interface ProductItem {
//   image: string;
//   title: string;
//   discount: string;
//   price: string;
//   sizes: string[];
// }

const ProductCard = ({ product }: { product: ProductItem }) => {
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
      <Box
        sx={{
          position: "relative",
        }}
      >
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

      <Button variant="contained" color="primary" size="small">
        مشاهده جزئیات
      </Button>
    </Box>
  );
};

export default ProductCard;
