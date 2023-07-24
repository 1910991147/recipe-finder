import React from "react";
import { Segment, Container } from "semantic-ui-react";

const Footer = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        {/* Content of your page goes here */}
        {/* Replace this div with your actual page content */}
      </div>
      <Segment
        inverted
        vertical
        style={{
          padding: "1em 0em",
          textAlign: "center",
          backgroundColor: "#333",
          color: "#fff",
          fontSize: "14px",
          letterSpacing: "1px",
        }}
      >
        <Container>
          <p style={{ margin: 0 }}>
            &copy;{new Date().getFullYear()} - <strong>DISH DISCOVER.</strong>{" "}
            All Rights Reserved
          </p>
        </Container>
      </Segment>
    </div>
  );
};

export default Footer;
