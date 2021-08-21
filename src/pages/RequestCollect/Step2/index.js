/* eslint-disable */

import { useEffect, useState, useContext } from "react";

import * as S from "./styles";

import plusicon from "../../../assets/img/icons/+icon.svg";

import { UserContext } from "../../../contexts";

const Step2 = ({ nextPage, backPage, firstPage, order, setOrder }) => {
  const [disable, setDisable] = useState(true);

  const orderFilter = order.filter((item) => item?.status);
  const orderFilterLengthMax = orderFilter.length;

  useEffect(() => {
    const orderFilterInput = order.filter(
      (item) => item?.weight >= 1 && item?.weight <= 50
    );
    const orderFilterInputLenght = orderFilterInput.length;

    setDisable(orderFilterInputLenght !== orderFilterLengthMax);
  }, [order]);

  const onChange = (element, event) => {
    setOrder((previous) => {
      return previous.map((item) => {
        if (item.name === element.name) {
          return { ...item, weight: parseInt(event.target.value) };
        }
        return item;
      });
    });
  };

  const { user } = useContext(UserContext);
  const logged = user?.name || false;

  return (
    <>
      <S.HeaderWebRequest logged={logged} />
      <S.DesktopContainer>
        <S.DesktopAling>
          <S.Body>
            <S.BackB
              handleBack={backPage}
              pageTitle="Informe a quantidade média em quilos de cada material"
            />
            <S.ContainerMaterials>
              <S.Containers>
                {orderFilter.map((element) => {
                  return (
                    <S.ValueArea key={element?.name}>
                      <S.MaterialName>{element?.name}</S.MaterialName>
                      <S.KgIndex>kg</S.KgIndex>
                      <S.KgValue
                        placeholder="1kg a 50kg"
                        onChange={(e) => onChange(element, e)}
                        type="number"
                        step="0.5"
                        min="1"
                        max="50"
                      />
                    </S.ValueArea>
                  );
                })}
              </S.Containers>
            </S.ContainerMaterials>

            <S.EndPage>
              <S.TurnBack onClick={firstPage}>
                <S.TurnBackButton type="image" src={plusicon} alt="plusicon" />
                <S.ButtonSpan>Adicionar outro item</S.ButtonSpan>
              </S.TurnBack>
              <S.ButtonConfirm disable={disable} onClick={nextPage}>
                Continuar
              </S.ButtonConfirm>
            </S.EndPage>
          </S.Body>
        </S.DesktopAling>
      </S.DesktopContainer>
      <S.TabBarRequest />
    </>
  );
};

export default Step2;
