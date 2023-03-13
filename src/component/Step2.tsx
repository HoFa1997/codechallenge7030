import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { StepTwoProps } from "./type";

const StepTwo: FC<StepTwoProps> = ({ name, onContinue }) => {
  const [newName, setNewName] = useState("");

  const handleContinue = () => {
    onContinue(newName || name);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: 20 }}>
      <Card sx={{ maxWidth: 500, p: 5 }}>
        <Typography variant="h5">Hello, {name}!</Typography>
        <TextField
          sx={{ mt: 3 }}
          id="new-name"
          label="Change your name?"
          value={newName}
          onChange={handleNameChange}
          fullWidth
        />
        <Box pt={3}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default StepTwo;
