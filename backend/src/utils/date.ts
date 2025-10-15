export const obterDataAjustada = (): string => {
  const agora = new Date();
  const novaData = new Date(agora.getTime() - 3 * 60 * 60 * 1000);

  const dia = String(novaData.getDate()).padStart(2, "0");
  const mes = String(novaData.getMonth() + 1).padStart(2, "0");
  const ano = novaData.getFullYear();

  return `${ano}-${mes}-${dia}`;
};
