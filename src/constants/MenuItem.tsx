import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HistoryIcon from "@mui/icons-material/History";
import CommentIcon from "@mui/icons-material/Comment";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export interface MenuItem {
  label: string;
  icon: React.ReactNode;
}

export const menuItems: MenuItem[] = [
  { label: "حساب کاربری", icon: <AccountCircleIcon /> },
  { label: "تاریخچه سفارشات", icon: <HistoryIcon /> },
  { label: "علاقه‌مندی‌ها", icon: <FavoriteIcon /> },
  { label: "آدرس‌ها", icon: <LocationOnIcon /> },
  { label: "دیدگاه‌ها و نظرات", icon: <CommentIcon /> },
  { label: "خروج", icon: <ExitToAppIcon /> },
];
