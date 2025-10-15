export function formatTimestamp(timestamp: string) {
  const data = new Date(timestamp);

  const hora = data.getHours().toString().padStart(2, "0");
  const minuto = data.getMinutes().toString().padStart(2, "0");
  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const ano = data.getFullYear();

  return `${hora}:${minuto} ${dia}/${mes}/${ano}`;
}
