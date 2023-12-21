import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, getLength } from "./Store/Thunks/thunk";
import { LinkContainer } from "react-router-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePosts = () => {
  const data = useSelector((state) => state.news.articles.item);
  const loading = useSelector((state) => state.news.loading);
  const page = useSelector((state) => state.news.articles.page + 1);
  const postsLength = useSelector((state) => state.news.postsLen);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLength());
    if (data.length <= 0) {
      dispatch(fetchPosts({ page: 1, limit: 3 }));
    }
  }, []);

  return (
    <>
      <Container>
        <Row>
          {data.map((item, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: "18rem" }} className="m-4">
                  <Card.Img variant="top" src={`${item.image}?${item.id}`} />
                  <Card.Body>
                    <Card.Title>{item.author}</Card.Title>
                    <Card.Text>
                      {item.excerpt.substring(1, 100) + "..."}
                    </Card.Text>
                    <LinkContainer to={`/article/${item.id}`}>
                      <Button>Read More</Button>
                    </LinkContainer>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {loading ? (
        <div className="text-center m-2">
          <Spinner animation="border" variant="primary" />
          <Spinner animation="border" variant="secondary" />
          <Spinner animation="border" variant="success" />
          <Spinner animation="border" variant="danger" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="info" />
          <Spinner animation="border" variant="dark" />
          <Spinner animation="border" variant="light" />
        </div>
      ) : null}

      <Container>
        <Button
          variant="danger m-4"
          onClick={() =>
            dispatch(
              fetchPosts({
                page,
                limit: 3,
              })
            )
          }
          disabled={data.length >= postsLength ? true : false}
        >
          Load More
        </Button>
      </Container>
    </>
  );
};

export default HomePosts;
