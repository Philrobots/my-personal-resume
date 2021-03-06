import React, { Component } from "react";

import {
  Button,
  Card,
  CardBody
} from "reactstrap";

export default ({ data, isMobile }) => (
  <Card
    style={{ width: isMobile ? 350 : 450}}
    className="card-lift--hover shadow border-0 mt-4"

  >
    <CardBody className="py-3">
      <img
        width={60}
        height={50}
        src={require(`../../../assets/img/${data.image}`)}
      />
      <h3>{data.name}</h3>
      <h5 className="note mt-2 ml-0.2">{data.program}</h5>
      <div>
        <Button
          className="btn-round mt-1 mb-1"
          color="default"
          type="button"
          size="sm"
        >
          {data.date}
        </Button>
      </div>
      {data.myFavoriteCourse.length > 0 &&
        favoriteCourse(data.myFavoriteCourse)}
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
