export function formatToBRL(value) {
  return (value || 0).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
}