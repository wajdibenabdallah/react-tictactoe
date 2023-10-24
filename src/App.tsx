import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Player } from "./constants/Player";
import { isWinner } from "./constants/Case";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

function App() {
  console.log();
  const [player, setPlayer] = React.useState<Player>(Player.X);
  const [cases, setCases] = React.useState<Array<Player>>([]);
  const [winner, setWinner] = React.useState<Player | null>(null);

  const replay = () => {
    setWinner(null);
    setCases([]);
    setPlayer(Player.X);
  };

  const check = () => {
    const played = cases
      .map((_case, index) => {
        if (_case === player) return index;
        else return null;
      })
      .filter((_case) => _case !== null);

    const checkIsWinner = isWinner(played);

    if (checkIsWinner) {
      setWinner(player);
    }
  };

  const click = (index: number) => {
    console.log("winner", winner);
    if (!winner) {
      setCases((prevCases) => {
        if (!prevCases[index]) {
          prevCases[index] = player;
        }
        check();
        return prevCases;
      });
      setPlayer(player === Player.X ? Player.O : Player.X);
    }
  };
  const Item = styled(Paper)(() => ({
    textAlign: "center",
    width: "10rem",
    height: "10rem",
    fontSize: "8rem",
  }));

  return (
    <Box
      sx={{
        width: "35rem",
        height: "35rem",
        margin: "auto",
      }}
    >
      {winner && (
        <Alert
          icon={false}
          style={{ width: "28rem" }}
          action={
            <Button
              onClick={replay}
              color="inherit"
              size="small"
              style={{ border: "solid 1px" }}
            >
              Click here to Replay
            </Button>
          }
        >
          {winner} is the winner
        </Alert>
      )}
      <Grid container spacing={0.5}>
        {Array(9)
          .fill(1)
          .map((value, index) => (
            <Grid item key={index}>
              <Item
                onClick={(event) => {
                  click(index);
                }}
              >
                {cases[index]}
              </Item>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default App;
