import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Header, Image, List } from "semantic-ui-react";
import { getRecipe } from "../services/api";

// this component shows the image of recipe and its ingridients list.
const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({});

  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeId);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, [recipeId]);

  return Object.keys(recipe).length > 0 ? (
    <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
      <Grid container stackable columns={2} style={{ marginTop: "30px" }}>
        <Grid.Column width={6}>
          <div
            style={{
              width: "100%",
              height: "400px",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <Image
              src={recipe.image_url}
              size="large"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
            Provided By: {recipe.publisher}
          </p>
        </Grid.Column>
        <Grid.Column width={10}>
          <div style={{ paddingLeft: "20px" }}>
            <Header
              as="h1"
              style={{ fontSize: "2.5rem", marginBottom: "10px" }}
            >
              {recipe.title}
            </Header>
            <Header as="h2" style={{ fontSize: "2rem", marginBottom: "10px" }}>
              Ingredients
            </Header>
            <List divided relaxed style={{ maxWidth: "400px" }}>
              {recipe.ingredients.map((data, index) => (
                <List.Item key={index}>
                  <List.Icon name="checkmark" color="green" />
                  <List.Content>
                    <List.Description
                      style={{ fontSize: "1.1rem", marginBottom: "10px" }}
                    >
                      {data}
                    </List.Description>
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  ) : null;
};

export default RecipeDetails;
