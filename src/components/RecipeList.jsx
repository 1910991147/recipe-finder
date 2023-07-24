import React from "react";
import { Container, Grid, Message } from "semantic-ui-react"; // Import the Message component

import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes, searchedQuery }) => {
  return (
    <Container>
      {/* Add a Message component to give visual feedback about the searched ingredients */}
      <Message info style={{ margin: "20px" }}>
        <Message.Header>
          Here are the recipes containing "{searchedQuery}"
        </Message.Header>
      </Message>

      <Grid columns={4} doubling>
        {recipes &&
          recipes.map((recipe) => (
            <Grid.Column key={recipe.id}>
              <RecipeListItem recipe={recipe} />
            </Grid.Column>
          ))}
      </Grid>
    </Container>
  );
};

export default RecipeList;
