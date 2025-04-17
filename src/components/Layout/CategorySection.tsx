import { Box, Button, styled } from "@mui/material";
import { specialCategories, mainCategories } from "../../constants/HeaderItem";

const CategoryContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: "40px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 16,
  maxWidth: "1300px",
  padding: "16px",
}));

const CategoryBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

const ButtonCategory = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: "0.85rem",
  borderRadius: 8,
}));

const CategorySection = () => {
  return (
    <CategoryContainer>
      <CategoryBox>
        <Box display="flex" gap={2}>
          {specialCategories.map((cat, index) => (
            <ButtonCategory
              key={index}
              size="small"
              endIcon={
                index === 0 ? (
                  <span style={{ color: "#f4511e" }}>⭐</span>
                ) : index === 1 ? (
                  <span style={{ color: "#f4511e" }}>⚡</span>
                ) : (
                  <span style={{ color: "#f4511e" }}>🎯</span>
                )
              }
            >
              {cat}
            </ButtonCategory>
          ))}
        </Box>

        <Box display="flex" gap={2}>
          {mainCategories.map((cat, index) => (
            <ButtonCategory key={index} size="small">
              {cat}
            </ButtonCategory>
          ))}
        </Box>
      </CategoryBox>
    </CategoryContainer>
  );
};

export default CategorySection;
