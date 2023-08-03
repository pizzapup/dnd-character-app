import React from "react";
import styled from "@emotion/styled";
import {TableCell} from "@mui/material";

const DisplayScores = styled.div`
  border-radius: 10px;
  border: 1px solid rgb(208, 208, 208);
  max-width: 500px;
`;

const ScoreCard = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 1px 1px rgb(220, 220, 220);
  max-width: 500px;
  height: 80px;
`;

const ScoreCardList = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  margin: 8px;
  padding: 5px;
`;

const ScoreCardListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const ScoreCardLabel = styled.span`
  font-size: 13px;
`;

const RollValues = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid aliceblue;
`;

const RollValue = styled.li`
  height: 1rem;
  width: 1rem;
  padding: 5px;
  margin: 2px;
  text-align: center;
  border-radius: 5px;
`;

const ScoreValue = styled.div`
  padding-top: 8px;
  margin-top: 4px;
  text-align: center;
`;

const FinalScores = styled.div`
  background: hsl(0, 0%, 97%);
`;

const ScoreCell = styled(TableCell)`
  font-weight: bold;
  padding: 8px;
  text-align: center;
`;

const FinalScoresTitle = styled.div`
  text-align: center;
  padding-top: 5px;
`;

export {
  DisplayScores,
  ScoreCard,
  ScoreCardList,
  ScoreCardListItem,
  ScoreCardLabel,
  RollValues,
  RollValue,
  ScoreValue,
  FinalScores,
  ScoreCell,
  FinalScoresTitle,
};
