import React from 'react';
import { Box, Typography } from '@mui/material';

const PriceBox = ({ product }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "0px",
        left: "5px",
        backgroundColor: "white",
        py: "2px",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.1)' } 
      }}
    >
      {product.discountPrice ? (
        <>
          <Typography sx={{ textDecoration: "line-through" }} fontWeight="300" color={"#767690"} fontSize="12px">
            $ {product.price}
          </Typography>
          <Typography fontWeight="300" color={"red"} fontSize="12px">
            $ {product.discountPrice}
          </Typography>
        </>
      ) : (
        <Typography fontWeight="300" color={"#00000"} fontSize="12px">
          $ {product.price}
        </Typography>
      )}
    </Box>
  );
};

export default PriceBox;
