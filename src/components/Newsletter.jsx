import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addToNewsletter } from "./Store/Thunks/thunk";
import { showToast } from "./Toast";
import { Flip, ToastContainer,Slide } from "react-toastify";
 

const Newsletter = () => {
  const emailData = useRef();
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    const value = emailData.current.value;
    dispatch(addToNewsletter({ email: value }))
    .unwrap()
      .then((response) => {
        if (response.newsletter === "added") {
          showToast("SUCCESS", " 😼 Email registered successfully!!");
          emailData.current.value = ""
        }
        if (response.newsletter === "failed") {
          showToast("ERROR", " 🥱 Email already registered!!");
          emailData.current.value = ""
        }
    })
    // emailData.current.value = ""
  };

  return (
    <Container>
      <ToastContainer limit={4} transition={Flip} />
      <Form className="text-center " onSubmit={handleSubmit}>
        <Form.Group className="m-4">
          <h2>Email address</h2>
          <Form.Control
            ref={emailData}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Button className="mb-4" type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Newsletter;
