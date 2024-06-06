import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ProductList = ({ readProducts, products, deleteProduct }) => {
  useEffect(() => {
    readProducts();
  }, [readProducts]);

  return (
    <div className="ProductList">
      {products.map((item, index) => (
        <Card key={index} className="Card">
          <CardMedia
            sx={{ height: 140 }}
            image={item.image}
            title="product image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Название: {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Описание: {item.descr}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Цена: {item.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Link to={`edit/${item.id}`}>
              <Button size="small">Edit</Button>
            </Link>
            <Button
              size="small"
              onClick={(e) => deleteProduct(item.id)}
              style={{ color: "white", backgroundColor: "red" }}
              className="delete-button"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
