/* eslint-disable */

import { useEffect, useState } from "react";

import * as S from "./styles";

import plusicon from "../../../assets/img/icons/+icon.svg";
import { TabBar } from "../../../components/TabBar";

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

  return (
    <>
      <S.body>
        <S.backb
          handleBack={backPage}
          pageTitle="Informe a quantidade média em quilos de cada material"
        />
        <S.containers>
          {orderFilter.map((element) => {
            return (
              <S.valuearea key={element?.name}>
                <S.materialname>{element?.name}</S.materialname>
                <S.kgindex>KG</S.kgindex>
                <S.kgvalue
                  onChange={(e) => onChange(element, e)}
                  type="number"
                  step="0.5"
                  min="1"
                  max="50"
                />
              </S.valuearea>
            );
          })}
        </S.containers>

        <S.endPage>
          <S.turnback onClick={firstPage}>
            <S.turnbackbutton type="image" src={plusicon} alt="plusicon" />
            <S.buttonspan>Adicionar outro item</S.buttonspan>
          </S.turnback>
          <S.button disable={disable} onClick={nextPage}>
            Continuar
          </S.button>
        </S.endPage>
      </S.body>
      <TabBar />
    </>
  );
};

export default Step2;
