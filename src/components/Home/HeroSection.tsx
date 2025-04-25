import { Box, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { run, underRun } from "../../assets/images";
import { cssMainColors } from "../../styles/cssVariables/cssVariables";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "48px 90px 32px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    padding: "32px 16px",
    textAlign: "center",
  },
}));

const StatItem = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <Stack direction="row" alignItems="center" gap={1}>
    <Box
      sx={{
        width: 50,
        height: 50,
        borderRadius: 2,
        backgroundColor: cssMainColors.iceBlue,
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography fontWeight="bold" fontSize="1.1rem">
        {value}
      </Typography>
      <Typography fontSize="0.9rem" color="gray">
        {label}
      </Typography>
    </Box>
  </Stack>
);

const HeroSection = () => {
  return (
    <Wrapper>
      {/* ستون آمار سمت راست */}
      <Box
        display="flex"
        flexDirection="column"
        gap={4}
        sx={{ direction: "rtl" }}
      >
        <StatItem
          icon={
            <StorefrontIcon
              sx={{ color: cssMainColors.primary, fontSize: 30 }}
            />
          }
          value="+۳۰۰"
          label="محصولات متنوع"
        />
        <StatItem
          icon={
            <ThumbUpAltOutlinedIcon
              sx={{ color: cssMainColors.primary, fontSize: 30 }}
            />
          }
          value="۹۵٪"
          label="رضایت مشتری"
        />
        <StatItem
          icon={
            <CalendarTodayOutlinedIcon
              sx={{ color: cssMainColors.primary, fontSize: 30 }}
            />
          }
          value="۴ روز"
          label="از خرید تا دریافت"
        />
      </Box>

      {/* تصویر دونده */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          minWidth: 300,
          maxWidth: 400,
        }}
      >
        <img
          src={run}
          alt="runner"
          style={{
            maxHeight: 360,
            position: "relative",
            zIndex: 2,
            transform: "translateY(12px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-25px",
            left: 0,
            right: 0,
            mx: "auto",
            width: "100%",
            maxWidth: 360,
          }}
        >
          <img
            src={underRun}
            alt="underline"
            style={{ width: "100%", display: "block", height: "auto" }}
          />
        </Box>
      </Box>

      {/* متن معرفی و دکمه */}
      <Box flex={1} dir="rtl" sx={{ maxWidth: 450 }}>
        <Typography variant="subtitle2" color="text.secondary" mb={1}>
          راحت و مطمئن خرید کنید!
        </Typography>
        <Typography variant="h4" fontWeight="bold" mb={1}>
          همراه تو در مسیر سلامتی
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: cssMainColors.crimsonRed }}
          mb={2}
        >
          سهم بزرگ خودتان را امروز بگیرید!
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          بزرگترین حراج فصل فیت‌لند شروع شد، همین حالا شروع کن و محصولات با یه
          تخفیف شگفت‌انگیز بخر!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 4, py: 1.2 }}
        >
          مشاهده محصولات
        </Button>
      </Box>
    </Wrapper>
  );
};

export default HeroSection;
