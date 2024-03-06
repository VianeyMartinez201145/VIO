import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts, listProductDetails } from "../actions/productActions";

function Liquid() {
  const dispatch = useDispatch();
  const [setCategory] = useState("");
  const { error, loading, products, page, pages } = listProducts;
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  // Definir la categoría a filtrar
  const category = "pencil";

  useEffect(() => {
    // Realizar la solicitud de productos con la categoría especificada
    dispatch(listProductDetails("", category));
  }, [dispatch, category]);

  const handleCategoryChange = (e) => {
    setCategory(product.category); // Actualizar el estado de la categoría al cambiar la selección del usuario
  };

  return (
    <div>
      <ProductCarousel />

      <h1>Últimos productos de la categoría "Pencil"</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row className="h">
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} />
        </div>
      )}
    </div>
  );
}

export default Liquid;
