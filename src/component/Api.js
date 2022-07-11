import React from "react";
import { ApiContext } from "../context/ApiContext";
import { Container, Row, Col } from "react-bootstrap";

const Api = () => {
  return (
    <ApiContext.Consumer>
      {({ Api }) => {
        console.log(Api);
        return (
          <div>
            <h1>Daftar Flim</h1>
            <Container>
              <Row>
                {Api === []
                  ? null
                  : Api.map((item, key) => (
                      <Col key={key} md={3}>
                        <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} onClick="Coba" alt="" width={200} />
                        <h4>{item.original_title}</h4>
                        <h4>{item.release_date}</h4>
                      </Col>
                    ))}
              </Row>
            </Container>
          </div>
        );
      }}
    </ApiContext.Consumer>
  );
};

export default Api;
