import { Box, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";
import { latestProductsSectionData } from "../../../data/latestProductsBannerData ";
import { LatestProductsSectionData } from "../../../types/latestProductsSectionData";


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

const ItemCard = ({ item }: { item: LatestProductsSectionData["items"][0] }) => {
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
        {item.image && (
          <Box sx={{ position: "relative" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Box>
        )}

<Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2 }}>
        {item.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
        {item.price}
      </Typography>

      {item.sizes && (
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
          از سایز: {item.sizes.join(", ")}
        </Typography>
      )}

      <Button variant="contained" color="primary" size="small">
        مشاهده جزئیات
      </Button>
    </Box>
  );
};

const LatestProductsSection = () => {
    return (
      <Box sx={{ marginBottom: "60px" }}>
        <Title variant="h5" fontWeight="bold">
          جدیدترین محصولات
        </Title>
        <Grid container spacing={4} justifyContent='center'>

          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                borderRadius: 12,
                backgroundColor: "white",  
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                padding: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>
                {latestProductsSectionData.thirdItem.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
                {latestProductsSectionData.thirdItem.description}
              </Typography>
              <Button variant="contained" color="primary">
                {latestProductsSectionData.thirdItem.buttonText}
              </Button>
            </Box>
          </Grid>
          
          {latestProductsSectionData.items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ItemCard item={item} />
            </Grid>
          ))}


        </Grid>
      </Box>
    );
};

export default LatestProductsSection;
