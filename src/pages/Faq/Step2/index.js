import { useContext } from "react";
import WomanRecy from "../../../assets/img/illustrations/womanRecycle.svg";
import { UserContext } from "../../../contexts";
import * as S from "./styles";

const Step2 = ({ firstPage }) => {
  const { user } = useContext(UserContext);
  const isLogged = user?.name || false;
  return (
    <>
      <S.HeaderDesktop logged={isLogged} />
      <S.Body>
        <S.BackB handleBack={firstPage} pageTitle="Dúvidas Frequentes" />
        <S.DesktopAling>
          <S.DesktopContainer>
            <S.MainTextAling>
              <S.MainSpan>O que é reciclável?</S.MainSpan>
            </S.MainTextAling>
            <S.PageContent>
              <img src={WomanRecy} alt="woman recycling" />
              <S.ContentSpan>
                Resíduos descartados que podem retornar à cadeia produtiva para
                virar o mesmo produto ou produtos diferentes dos originais, como
                a maioria dos papéis, vidros e plásticos, papelão e alumínio.
                Estes podem ser separados e entregues à coleta seletiva. Já o
                lixo eletrônico pode ser reciclado, após triagem, e deve ser
                descartado em pontos específicos com essa finalidade..
              </S.ContentSpan>
            </S.PageContent>
          </S.DesktopContainer>
        </S.DesktopAling>
      </S.Body>
    </>
  );
};
export { Step2 };
