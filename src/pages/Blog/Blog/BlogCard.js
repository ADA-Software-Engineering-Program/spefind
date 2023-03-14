import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FiArrowUpRight } from "react-icons/fi";
import "./blog.css";
import { Link } from "react-router-dom";

function BlogCard(props) {
  const buttonSecond = props.buttonSecond;
  return (
    <Card style={{ width: "22.5rem" }}>
      <Card.Img variant="top" src={props.cardImage} />
      <Card.Body className="d-flex justify-content-between flex-column">
        <div className="card-main-text">
          <Card.Title className="card-title1">{props.title}</Card.Title>
          <div className="d-flex card-text1 card-text2">
            <span>{props.author} </span>
            <span> . </span>
            <span>{props.date}</span>
          </div>
          <Card.Text className="card-text1">{props.cardText}</Card.Text>
          <Link to="#" className="card-link1 d-block pb-3 text-decoration-none">
            Read more <FiArrowUpRight />
          </Link>
        </div>
        <div className="button-group d-flex">
          <Button variant="outline-secondary" className="button1">
            {props.buttonFirst}
          </Button>
          {buttonSecond && (
            <Button variant="outline-secondary" className="button1">
              {buttonSecond}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
