import * as S from "./styles";

const SelectMaterial = ({ material, setMaterial, ...rest }) => {
  const onClick = (element) => {
    setMaterial((previous) => {
      return previous.map((item) => {
        if (item.name === element.name) {
          return { ...item, status: !item.status };
        }
        return item;
      });
    });
  };

  return (
    <S.ContainerSelectMaterial {...rest}>
      {material?.map((element) => {
        return (
          <S.ContainerMaterial
            key={element.name}
            status={element.status}
            onClick={() => onClick(element)}
          >
            <S.ContainerMaterialText>{element?.name}</S.ContainerMaterialText>
          </S.ContainerMaterial>
        );
      })}
    </S.ContainerSelectMaterial>
  );
};

export { SelectMaterial };
