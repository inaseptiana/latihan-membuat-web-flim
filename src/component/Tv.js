import React from "react";
import { TvContext } from "../context/TvContext";
import { Container, Row, Col } from "react-bootstrap";

const Tv = () => {
  return (
    <TvContext.Consumer>
      {({ Tv }) => {
        console.log(Tv);
        return (
          <div>
            <h1>halo</h1>
            <Container>
              <Row>
                {Tv === []
                  ? null
                  : Tv.map((item, key) => (
                      <Col key={key} md={3}>
                        <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} onClick alt="poster" width={200} />
                        <h4>{item.name}</h4>
                      </Col>
                    ))}
              </Row>
            </Container>
          </div>
        );
      }}
    </TvContext.Consumer>
  );
};

export default Tv;
