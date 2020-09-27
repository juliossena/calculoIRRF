export function doubleToReal(valor) {
  const nf = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });
  return nf.format(valor);
}

export default doubleToReal;
