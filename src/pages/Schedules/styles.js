import styled from "styled-components";
import BackButton from "../../components/BackButton";
import { ViewDetails } from "../../components/ViewDetails";

export const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 30px;
`;

export const CollectionsButton = styled(BackButton)`
  margin-top: 20px;
  margin-right: auto;
`;

export const ViewSettings = styled(ViewDetails)`
  margin-bottom: 48px;
`;

export const CollectionsImg = styled.img`
  margin: auto;
  margin-bottom: 41px;
`;
