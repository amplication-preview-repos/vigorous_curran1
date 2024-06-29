import { FinancialDataWhereInput } from "./FinancialDataWhereInput";
import { FinancialDataOrderByInput } from "./FinancialDataOrderByInput";

export type FinancialDataFindManyArgs = {
  where?: FinancialDataWhereInput;
  orderBy?: Array<FinancialDataOrderByInput>;
  skip?: number;
  take?: number;
};
