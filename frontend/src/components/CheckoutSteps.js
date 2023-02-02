import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CheckoutSteps(props) {
  return (
    <Row ClassName="checkout-steps">
      <Col ClassName={props.step1 ? "active" : ""}>Sign-In</Col>
      <Col ClassName={props.step2 ? "active" : ""}>Shipping</Col>
      <Col ClassName={props.step3 ? "active" : ""}>Payment</Col>
      <Col ClassName={props.step4 ? "active" : ""}>Place Order</Col>
    </Row>
  );
}
