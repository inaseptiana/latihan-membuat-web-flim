import React from "react";
import { ApiContext } from "../context/ApiContext";
import { Container, Form, Row, Col } from "react-bootstrap";

const Api = () => {
  return (
    <ApiContext.Consumer>
      {({ Api }) => {
        console.log(Api);
        return (
          <div>
            <h1>Api</h1>
            {Api === []
              ? null
              : Api.map(
                  (item, key) => (
                    <div key={key}>
                      <Container>
                        <Row>
                          <Col xs="col">
                            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} alt="" width={200} />
                            <h4>{item.original_title}</h4>
                            <h4>{item.release_date}</h4>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  )
                  // <h1 key={key}>Judul Flim : {item.original_title}</h1>
                )}
          </div>
        );
      }}
    </ApiContext.Consumer>
  );
};

export default Api;
