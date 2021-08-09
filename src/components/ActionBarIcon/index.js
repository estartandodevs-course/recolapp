import { useHistory } from "react-router-dom";
import * as S from "./styles";

const IconsBar = ({ image, path }) => {
  const history = useHistory();

  return (
    <S.ContainerIcon onClick={() => history.push(path)}>
      <S.ImageIcon src={image} alt="icon tab-bar" />
    </S.ContainerIcon>
  );
};

export { IconsBar };
