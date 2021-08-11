import styled from "styled-components";

export const NavegationBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 100%;
  min-height: 64px;
  /* position: sticky; */
  box-sizing: border-box;
  background-color: var(--lightGray);
  box-shadow: 0px -2px 10px 1px #4f4f4f26;
`;
