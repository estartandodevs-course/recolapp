import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  gap: 13px;
`;

export const Img = styled.img`
  cursor: pointer;
  width: 21.33px;
  @media (min-width: 768px) {
    width: 22px;
  }
`;
export const Pagetitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  font-weight: 600;
  color: var(--textColor);
  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
