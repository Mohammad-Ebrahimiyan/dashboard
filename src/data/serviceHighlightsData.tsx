import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaymentIcon from "@mui/icons-material/Payment";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { ServiceHighlightItem } from "../types/serviceHighlightItem";

export const serviceHighlights: ServiceHighlightItem[] = [
  { title: "پرداخت درب منزل", icon: <HomeWorkIcon fontSize="large" /> },
  { title: "پرداخت قسطی", icon: <PaymentIcon fontSize="large" /> },
  { title: "ارسال سریع", icon: <LocalShippingIcon fontSize="large" /> },
];