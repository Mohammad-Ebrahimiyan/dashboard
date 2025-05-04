import { Stack } from "@mui/material";
import { Enamad, Enamad1, Enamad2 } from "../../../assets/images/index";

const FooterBadges = () => (
  <Stack spacing={2} direction="row" mt={6} marginLeft='200px'>
    <img src={Enamad} alt="نماد تجارت" width={60} />
    <img src={Enamad1} alt="ساماندهی" width={60} />
    <img src={Enamad2} alt="اینماد" width={60} />
  </Stack>
);

export default FooterBadges;
