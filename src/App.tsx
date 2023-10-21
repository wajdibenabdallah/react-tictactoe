import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function App() {
  const click = () => {
    console.log("click");
  };
  const Item = styled(Paper)(() => ({
    textAlign: "center",
    width: "10rem",
    height: "10rem",
  }));

  return (
    <Box
      sx={{
        width: "35rem",
        height: "35rem",
        margin: "auto",
      }}
    >
      <Grid container spacing={0.5}>
        {Array(9)
          .fill(1)
          .map((value, index) => (
            <Grid item  key={index}>
              <Item onClick={click}>
                {index}
              </Item>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default App;
