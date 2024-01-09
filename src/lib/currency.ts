export const formatCurrency = (num: number) =>
  new Intl.NumberFormat('se-SE', { style: 'currency', currency: 'SEK' }).format(
    num,
  );
