import NavItem from "./NavItem/NavItem";
import {Box} from "@mui/material";

const Navigation = () => (
  <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
    <NavItem to='/quotes' end>Quotes</NavItem>
    <NavItem to='/quotes/create' end>Submit new quote</NavItem>
  </Box>
)

export default Navigation;
