import {
  Grid,
  Box,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { run, underRun } from "../../../assets/images";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box px={{ xs: 4, md: 30 }} py={6}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={isMobile ? "column-reverse" : "row"}
      >



        {/* ستون آمارها */}
        <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" gap={4} sx={{ direction: "rtl" }}>
            <StatItem
              icon={
                <StorefrontIcon
                  sx={{
                    color: cssMainColors.primary,
                    fontSize: 45,
                    padding: "10px 8px 3px 5px",
                  }}
                />
              }
              value="+۳۰۰"
              label="محصولات متنوع"
            />
            <StatItem
              icon={
                <ThumbUpAltOutlinedIcon
                  sx={{
                    color: cssMainColors.primary,
                    fontSize: 45,
                    padding: "10px 8px 3px 5px",
                  }}
                />
              }
              value="۹۵٪"
              label="رضایت مشتری"
            />
            <StatItem
              icon={
                <CalendarTodayOutlinedIcon
                  sx={{
                    color: cssMainColors.primary,
                    fontSize: 45,
                    padding: "10px 8px 3px 5px",
                  }}
                />
              }
              value="۴ روز"
              label="از خرید تا دریافت"
            />
          </Box>
        </Grid>

        {/* ستون تصویر */}
        <Grid item xs={12} md={4}>
          <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minWidth={300}
            maxWidth={400}
            mx="auto"
          >
            <img
              src={run}
              alt="runner"
              style={{
                maxHeight: 360,
                zIndex: 2,
                transform: "translateY(12px)",
                position: "relative",
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
                style={{ width: "100%", display: "block" }}
              />
            </Box>
          </Box>
        </Grid>

                {/* ستون معرفی */}
            <Grid item xs={12} md={4}>
          <Box dir="rtl" sx={{ maxWidth: 450 }}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
