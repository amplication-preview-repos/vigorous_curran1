import { SortOrder } from "../../util/SortOrder";

export type FinancialDataOrderByInput = {
  createdAt?: SortOrder;
  expenses?: SortOrder;
  id?: SortOrder;
  income?: SortOrder;
  investments?: SortOrder;
  updatedAt?: SortOrder;
};
