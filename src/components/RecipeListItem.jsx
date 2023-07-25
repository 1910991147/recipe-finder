import React, { useState } from "react";
import { Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RecipeListItem = ({ recipe }) => {
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    setHovering(false);
  };

  return (
    <Card
      fluid
      style={{
        padding: "1rem",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        transform: hovering ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
        height: "100%",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: 220,
          borderRadius: "8px",
          marginBottom: "1rem",
        }}
      >
        <img
          src={recipe.image_url}
          alt="thumbnail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "0.8rem",
            background: "rgba(0, 0, 0, 0.6)",
            color: "white",
            borderRadius: "0 0 8px 8px",
            visibility: hovering ? "visible" : "hidden",
            transition: "visibility 0.3s ease-in-out",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              as={Link}
              to={`/recipes/${recipe.recipe_id}`}
              basic
              inverted
              content="View Details"
              size="tiny"
              style={{ width: "100%" }} // Make the button full width
            />
          </div>
        </div>
      </div>
      <Card.Content>
        <Card.Header content={recipe.title} />
      </Card.Content>
    </Card>
  );
};

export default RecipeListItem;
