import React, { useState, useContext } from "react";
import { ProductContext } from "../../Context/UserProvider";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import packImage from './img/pack1.jpg';
import "./Search.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, handleAddToCart } = useContext(ProductContext);

  const handleBuyClick = (product) => {
    handleAddToCart({ ...product, quantity: 1 });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filtered-products">
        {filteredProducts.map((product) => (
          <Card key={product.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={packImage}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="name-product">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ marginTop: '1rem' }}>
                  {product.price}€
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" className="buy-button" onClick={() => handleBuyClick(product)} >
                Comprar
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
