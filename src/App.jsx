import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Typography } from '@mui/material';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { products } from './data';
import DiscountBox from './componentes/DiscountBox';
import PriceBox from './componentes/PriceBox';
import ProductInfo from './componentes/ProductInfo';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.0)',
  },
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1, height: '100vh', p: 3 }}>
      <Typography sx={{ transform: 'skewX(-20deg)' }} fontSize={24}><>OUTLET: TENIS Y ROPA DE MUJER CON DESCUENTO [1704]</></Typography>

      <Grid container spacing={1} item p={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Item>
            <Stack position="relative" sx={{ transition: 'transform 0.5s', '&:hover': { transform: 'scale(1.1)' } }}>
                <img src={product.img} alt="" style={{ maxWidth: '100%' }} />
                <Box sx={{ position: "absolute", right: "12px", top: "12px"  }}>
                  { product.isLike ? 
                    ( <AiFillHeart size="15" />
                  ):(
                    <AiOutlineHeart size={20} color='#000000' />
                  )}
                </Box>
                <DiscountBox product={product} />
                <PriceBox product={product} />
              </Stack>
              <Stack padding="10px" >
                <Typography fontSize="14px">{product.title}</Typography>
                <Typography fontSize="12px" color="#767677">
                  {product.category}
                </Typography>
                <ProductInfo product={product} />
              </Stack>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
