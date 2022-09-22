import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import mam from "../assets/mam.jpg";
import sir from "../assets/sir.jpg";

const InstructorCard = () => {
  return (
    <div>
      <CardGroup className="mt-1">
        <Card>
          <CardImg alt="Card image cap" src={sir} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Arjun Verma</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Professional Dancer
            </CardSubtitle>
            <CardText>
              Arjun, also known as Jaction, is one of the most versatile
              instructors of ADancin Arena. He can go from Hip-Hop to
              Parkour/Acrobats or from Aerial training to Intense workout. He
              can guide you on how to lose weight or how to strengthen your body
              at the same time.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg alt="Card image cap" src={mam} top width="100%" />
          <CardBody>
            <CardTitle tag="h5">Neha</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Professional Dancer
            </CardSubtitle>
            <CardText>
              One of her kind, Neha takes up the choreography as if it is there
              in her blood. She specialises in semi-classical form of dance
              which she does and makes you do in the best way possible.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default InstructorCard;
