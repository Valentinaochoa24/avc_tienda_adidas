import React from 'react';
import { Box, Typography } from '@mui/material';

const ProductInfo = ({ product }) => {
  return (
    <Box display= "flex" flexDirection= "row" gap={1}>
      <Typography fontSize="12px" color="#767677">{ product.info }</Typography>
      {product.quantityColor && (
        <Typography fontSize="12px" color="#767677">
          {product.quantityColor} colores
        </Typography>
      )}
      {product.hasQuantityColor && (
          <span>&#8226;</span>
      )}

      {product.envio && (
        <Typography fontSize="12px" color="#00000">envio gratis</Typography>
      )}
    </Box>
  );
};

export default ProductInfo;
