import React from "react";
import { Button } from "@mui/material";
export default function LoginButton({ disable, handleSubmit }) {
  return (
    <div>
      <Button
        variant="contained"
        fullWidth
        disabled={disable}
        onClick={handleSubmit}
        sx={{
          bgcolor: "#ffc801",
          color: "black",
          fontWeight: "bold",
          textTransform: "capitalize",
          fontSize: "20px",
          borderRadius: "20px",
          mt: 2,
          "&:hover": {
            bgcolor: "#ffc801",
          },
        }}
        disableElevation
      >
        Login
      </Button>
    </div>
  );
}