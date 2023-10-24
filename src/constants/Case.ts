const winnerCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const isWinner = (
  played: Array<number | null>
): boolean | Array<number> => {
  for (const winnerCase of winnerCases) {
    const win = winnerCase.every((_case: number) => played.includes(_case));
    if (win) {
      console.log("?");
      return winnerCase;
    }
  }
  return false;
};
