import { useHistory } from "react-router-dom";
import * as S from "./styles";

const IconsBar = ({ name, image, path }) => {
  const history = useHistory();

  return (
    <S.ContainerIcon onClick={() => history.push(path)}>
      <S.ImageIcon src={image} alt={name + ` icon`} />
    </S.ContainerIcon>
  );
};

export { IconsBar };
