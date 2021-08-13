export const removeMask = (value) => {
  const onlyNumbers = value.replace(/[^\d]/g, "");
  return onlyNumbers;
};

export const passwordMatch = (value1, value2) => {
  if (value1 === value2) return true;

  return false;
};
