import styled from "styled-components";
import { BackButton } from "../../components/BackButtom";

export const CollectionsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 30px 80px;
`;

export const CollectionsButton = styled(BackButton)`
  margin-top: 20px;
  margin-right: auto;
  position: fixed;
`;

export const CollectionsImg = styled.img`
  margin: auto;
`;
