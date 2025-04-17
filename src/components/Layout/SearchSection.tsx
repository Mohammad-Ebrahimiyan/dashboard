import { styled, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  direction: "rtl",
  borderRadius: 16,
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.background.paper
      : "#f5f5f5", 
  width: "100%",
  display: "flex",
  flexDirection: "row-reverse",
  padding: "4px 16px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  color: theme.palette.mode === "dark" ? "#f4511e" : "#f4511e", 
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary, 
  },
  "& .MuiInputBase-input::placeholder": {
    color: theme.palette.mode === "dark" ? theme.palette.text.secondary : "#000", 
  },
}));

const SearchSection = () => {
  return (
    <Search sx={{ maxWidth: 500 }}>
      <StyledInputBase placeholder="جستجو" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  );
};

export default SearchSection;
