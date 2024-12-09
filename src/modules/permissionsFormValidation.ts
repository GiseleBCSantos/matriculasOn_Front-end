import {
  MAX_DESCRICAO_FIELD,
  MAX_ROLE_FIELD,
  validateLettersAndUnderscore,
  validateOnlyLetters,
  validatePermissionDescription,
  validateRole,
} from "./formValidationUtils";

export const handleChangeRole = (
  role: any,
  setErrorMessages: any,
  setRole: any
) => {
  setRole(role);
  const isRoleValid = validateRole(role);

  if (isRoleValid) {
    setErrorMessages((prevErrors: any) => ({
      ...prevErrors,
      role: "",
    }));
  } else {
    if (!!role && !validateLettersAndUnderscore(role)) {
      const roleOnlyUpperAndUndersc = role.slice(0, -1);
      setRole(roleOnlyUpperAndUndersc);
      console.log("Apenas letras maiúsculas e underscore ( _ )");
    } else if (role.length > MAX_ROLE_FIELD) {
      const roleWithMaxLenght = role.slice(0, MAX_ROLE_FIELD);
      setRole(roleWithMaxLenght);
      console.log(`Quantidade de caracteres maximo de ${MAX_ROLE_FIELD}`);
    } else {
      setErrorMessages((prevErrors: any) => ({
        ...prevErrors,
        role: "Digite a role corretamente",
      }));
    }
  }
};

export const handleChangeDescription = (
  descricao: any,
  setErrorMessages: any,
  setDescription: any
) => {
  setDescription(descricao);
  const isDescriptionValid = validatePermissionDescription(descricao);

  if (isDescriptionValid) {
    setErrorMessages((prevErrors: any) => ({
      ...prevErrors,
      descricao: "",
    }));
  } else {
    if (!!descricao && !validateOnlyLetters(descricao)) {
      const descricaoOnlyLetters = descricao.slice(0, -1);
      setDescription(descricaoOnlyLetters);
      console.log("Permitido apenas letras");
    } else if (descricao.length > MAX_DESCRICAO_FIELD) {
      const descricaoWithMaxLength = descricao.slice(0, MAX_DESCRICAO_FIELD);
      setDescription(descricaoWithMaxLength);
      console.log(`Quantidade de caracteres maximo de ${MAX_DESCRICAO_FIELD}`);
    } else {
      setErrorMessages((prevErrors: any) => ({
        ...prevErrors,
        descricao: "Digite a descrição corretamente",
      }));
    }
  }
};