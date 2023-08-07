import React from "react";
import "./DiceMiniGame.css";
import {ManualRoll} from "./Roll/Roll";
import {Typography} from "@mui/material";
import {Container, Box} from "@mui/material";

const DiceMiniGame = () => {
  return (
    <Container>
      <Typography
        component="h1"
        sx={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Roll for Scores
      </Typography>
      <Typography variant="body1" sx={{py: 1}}>
        Calculate your scores and modifiers from your dice rolls! Submit your
        dice values manually or click the "roll" button to generate random
        values.
      </Typography>
      <Box sx={{minHeight: "150px"}}>
        <ManualRoll />
      </Box>
    </Container>
  );
};

export default DiceMiniGame;
