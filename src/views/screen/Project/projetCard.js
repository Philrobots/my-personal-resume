import React, { Component } from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { isTemplateExpression } from "typescript";

export default ({ data, isMobile }) => (
  <Card
    style={{ width: isMobile ? 350 : 450 }}
    className="card-lift--hover shadow border-0"
  >
    <CardBody className="py-3">
      <img
        width={60}
        height={50}
        src={require(`../../../assets/img/login.jpg`)}
      />
      <h3>{data.name}</h3>
      <h5 className="note mt-2 ml-0.2"> Hello</h5>
      <div>
        <Button
          className="btn-round mt-1 mb-1"
          color="default"
          type="button"
          size="sm"
        >
          Hey hey hey
        </Button>
      </div>
    </CardBody>
  </Card>
);

function favoriteCourse(courses) {
  return (
    <div>
      <h6 className="mt-2">Mes cours préferés</h6>
      {courses.map((course) => (
        <p className="mt-1 mb-1"> - {course} </p>
      ))}
    </div>
  );
}