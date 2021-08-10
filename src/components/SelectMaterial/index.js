import React, { useEffect, useState } from "react";

import * as S from "./styles";

const SelectMaterial = ({ array, ...rest }) => {
  const [material, setMaterial] = useState(array);

  useEffect(() => {
    console.log(material);
    setMaterial({ ...material });
  }, [material]);

  return (
    <>
      <S.ContainerSelectMaterial {...rest}>
        {material &&
          material.map((element) => {
            return (
              <>
                <S.ContainerMaterial
                  key={`Material${element.id}`}
                  status={element.status}
                  onClick={() =>
                    (element.status = element.status ? false : true)
                  }
                >
                  <S.ContainerMaterialText>
                    {element?.name}
                  </S.ContainerMaterialText>
                </S.ContainerMaterial>
              </>
            );
          })}
      </S.ContainerSelectMaterial>
    </>
  );
};

export { SelectMaterial };
