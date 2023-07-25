import { useState } from "react";
import { Grid, Input, Form } from "semantic-ui-react";

const Search = ({ setSearchedQuery }) => {
  const [value, setValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const onFormSubmit = () => {
    if (value.trim() === "") {
      // Show the alert message if input is empty
      setShowAlert(true);
    } else {
      // Hide the alert message and perform the search
      setShowAlert(false);
      setSearchedQuery(value);
    }
  };

  const onInputChange = (e, { value }) => {
    // Hide the alert message when the user starts typing
    setShowAlert(false);
    setValue(value);
  };

  return (
    <Grid container centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={12} computer={10} textAlign="center">
          <Form onSubmit={onFormSubmit}>
            <Form.Field style={{ width: "100%" }}>
              {showAlert && (
                <header
                  style={{
                    color: "red",
                    fontSize: "16px",
                    margin: 0,
                    textAlign: "center",
                  }}
                >
                  Please enter the ingredients!
                </header>
              )}
              <Input
                icon="search"
                iconPosition="left"
                placeholder="enter some ingredient like tomato or onion"
                action={{
                  content: "Search",
                  color: "blue",
                  style: { borderRadius: "0 4px 4px 0" },
                }}
                onChange={onInputChange}
                value={value}
                style={{
                  borderRadius: "4px",
                  height: "50px", // Adjust the height as desired
                  width: "100%", // Make it full width
                }}
              />
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Search;
