import React from "react";
import {Box,Link,Typography} from '@mui/material'
const Navbar = () => {
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      sx={{ boxShadow: 3, mb: 2 }}
    >
     <Typography variant="h1" color={"white"}fontWeight="bold">
      AI Smart APP 
     </Typography>
     <Link href="/register"p={1}>
      Sign Up
     </Link>
     <Link href="/register"p={1}>
      Sign In
     </Link>
    </Box>
  );
};

export default Navbar;
