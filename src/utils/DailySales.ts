import { DailySale, Sales } from "@/types/sales"

const getDailySales = (sales: Sales[]): DailySale[] => {
  const dailySalesMap: Map<string, Map<string, { total: number; sellerFullName: string }>> = new Map();

    sales.forEach(sale => {
      const saleDate = new Date(sale.date);
      const year = saleDate.getFullYear();
      const month = saleDate.getMonth() + 1;
      const day = saleDate.getDate();
      const saleKey = `${year}-${month}-${day}`;
      const cpf = sale.seller.cpf;
      const price = sale.price;
      const sellerFullName = `${sale.seller.first_name} ${sale.seller.last_name}`;

      if (!dailySalesMap.has(cpf)) {
          dailySalesMap.set(cpf, new Map());
      }
      if (!dailySalesMap.get(cpf)!.has(saleKey)) {
          dailySalesMap.get(cpf)!.set(saleKey, { total: 0, sellerFullName });
      }

      dailySalesMap.get(cpf)!.get(saleKey)!.total += price;
    });

    const dailySales: DailySale[] = [];
    dailySalesMap.forEach((sellerMap) => {
      sellerMap.forEach(({ total, sellerFullName }, date) => {
          const [year, month, day] = date.split('-').map(Number);
          dailySales.push({ year, month, day, total, sellerFullName });
      });
    });

    return dailySales;
}

export default getDailySales
