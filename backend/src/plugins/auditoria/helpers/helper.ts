export function normalizar(str: string, data?: boolean) {
  if (data) {
    const d = new Date(str);
    if (!isNaN(d.getTime())) {
      return `${String(d.getUTCDate()).padStart(2, "0")}/${String(
        d.getUTCMonth() + 1
      ).padStart(2, "0")}/${d.getUTCFullYear()}`;
    }
    return str;
  }

  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}
