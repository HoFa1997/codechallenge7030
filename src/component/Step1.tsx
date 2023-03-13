import * as React from "react";
import { FC, useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { StepOneProps } from "./type";

const StepOne: FC<StepOneProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name.trim()) {
      onSubmit(name);
    } else {
      setTouched(true); // set touched to true if the form was submitted without a valid input
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (touched) {
      setTouched(false); // reset touched state if the user starts typing again
    }
  };

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 20 }}>
        <Card sx={{ maxWidth: 500, p: 5 }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" component="label" htmlFor="name">
              Enter your name:
            </Typography>
            <TextField
              id="name"
              value={name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              fullWidth
              error={touched && name.trim().length === 0} // show error only if the field has been touched and no valid input is provided
              helperText={
                touched && name.trim().length === 0
                  ? "Please enter your name"
                  : " "
              } // empty string to reserve space for the error message
            />
            <Button type="submit" variant="contained">
              Next
            </Button>
          </form>
        </Card>
      </Box>
    </Container>
  );
};

export default StepOne;
