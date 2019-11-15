import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardName = styled.div`
  font-size: 25px;
`;
const CardGender = styled.div`
  font-size: 25px;
`;
const CardImg = styled.img``;

export default function CharacterCard({ character }) {
  return (
    <Card>
      <CardImg src={character.image} />
      <CardName>{character.name}</CardName>
      <CardGender>{character.gender}</CardGender>
    </Card>
  );
}
