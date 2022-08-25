import React from 'react';
import {NavLink} from "react-router-dom";
import {Box} from "@mui/material";

const activeStyles = {color: "lightblue", fontWeight: 'bold'};
const styles = {color: "#000", textDecoration: 'none'};
const SideNavigation = ({categories}) => {
  return (
    <Box>
      <Box><NavLink end style={({isActive}) => isActive ? activeStyles : styles} to={`/quotes`}>All</NavLink></Box>
      {categories.map(category => (
        <Box key={category.id}><NavLink end style={({isActive}) => isActive ? activeStyles : styles} to={`/quotes/${category.id}`}>{category.title}</NavLink></Box>
      ))}
    </Box>
  )
}

export default SideNavigation;
