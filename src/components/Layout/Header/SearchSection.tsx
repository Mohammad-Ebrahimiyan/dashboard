import { styled, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { cssMainColors } from "../../../styles/cssVariables/cssVariables";

const Search = styled("div")(({ theme }) => ({
  direction: "rtl",
  borderRadius: 16,
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.paper
      : cssMainColors.grayF5, 
  // width: "100%",
  display: "flex",
  flexDirection: "row-reverse",
  padding: "4px 16px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  color: theme.palette.mode === "dark" ? cssMainColors.orangeMain : cssMainColors.orangeMain , 
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(() => ({
  flex: 1,
}));

const SearchSection = () => {
  return (
    <Search sx={{ width:450 }}>
      <StyledInputBase placeholder="جستجو" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchSection;
