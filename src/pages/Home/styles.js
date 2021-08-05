import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--lightGray);
  height: 100vh;
  color: #4f4f4f;
  padding: 0px 30px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Title = styled.h3`
  padding-top: 32px;
`;
export const Pragraph = styled.p`
  padding: 8px 0px 4px 0px;
  color: #4f4f4f;
  font-size: 14px;
`;
export const RedirectLogin = styled.a`
  color: #4f4f4f;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip-ink: none;
`;

export const Img = styled.img`
  margin: auto;
`;

export const ContainerBottom = styled.div`
  width: 100%;
  padding-bottom: 32px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
