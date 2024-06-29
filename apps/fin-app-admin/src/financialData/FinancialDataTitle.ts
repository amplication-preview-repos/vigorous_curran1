import { FinancialData as TFinancialData } from "../api/financialData/FinancialData";

export const FINANCIALDATA_TITLE_FIELD = "id";

export const FinancialDataTitle = (record: TFinancialData): string => {
  return record.id?.toString() || String(record.id);
};
