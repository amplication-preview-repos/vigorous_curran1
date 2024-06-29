import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ForecastWhereInput = {
  id?: StringFilter;
  predictedExpenses?: FloatNullableFilter;
  predictedIncome?: FloatNullableFilter;
  predictedInvestments?: FloatNullableFilter;
};
