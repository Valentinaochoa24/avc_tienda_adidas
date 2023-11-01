import React from 'react';
import { Box, Typography } from '@mui/material';

const DiscountBox = ({ product }) => {
  return product.discount && (
    <Box sx={{
      flexDirection: "column",
      position: "absolute",
      top: "240px",
      left: "5px",
      backgroundColor: "white",
      width: "45px",
      textAlign: "center",
      py: "1px",
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.1)' } 
    }}>
      <Typography fontWeight="300" color={"#767690"} fontSize="12px">
        $ {product.discount}
      </Typography>
    </Box>
  );
};

export default DiscountBox;
