import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  gap: 13px;
`;

export const Img = styled.img`
  width: 21px;
  height: 21px;
  margin-top: 5px;
  @media (min-width: 768px) {
    margin-top: 7px;
  }
`;

export const Pagetitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  font-weight: 600;
  color: var(--textColor);

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
