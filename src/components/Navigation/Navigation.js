import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Ul = styled.ul`
  display: flex;
  justify-content: center;
`;

const Li = styled.li`
  font-size: 25px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
`;

export default function Navigation() {
  return (
    <Ul>
      <Li>
        <NavLink to="/home" activeClassName="active">
          Home
        </NavLink>
      </Li>
      <Li>
        {" "}
        <NavLink to="/character" activeClassName="active">
          Character
        </NavLink>
      </Li>
    </Ul>
  );
}
