import { SortOrder } from "../../util/SortOrder";

export type ForecastOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  predictedExpenses?: SortOrder;
  predictedIncome?: SortOrder;
  predictedInvestments?: SortOrder;
  updatedAt?: SortOrder;
};
