import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Form } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import { listProducts, listProductDetails } from "../actions/productActions";
import "./styles.css";

function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products, page, pages } = productList;
  const [category, setCategory] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listProducts(keyword, category));
  }, [dispatch, keyword, category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      {!keyword && <ProductCarousel />}

      <h1>Últimos productos</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row className="h">
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <div className="products">
                  <Product product={product} />
                </div>
              </Col>
            ))}
          </Row>
          <br />
          <br />
          <br />
          <Paginate page={page} pages={pages} keyword={keyword} />
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
