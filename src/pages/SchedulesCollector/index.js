import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts";

import * as S from "./styles";

const SchedulesCollector = () => {
  const history = useHistory();

  const { user } = useContext(UserContext);

  const collections = getCollectionsByUserID(user.id);

  const logged = user?.name;
  return (
    <>
      <S.Header logged={logged} />
      <S.Body>
        <div></div>
        <span>teste</span>
      </S.Body>
      <S.TabB />
    </>
  );
};
export default SchedulesCollector;
