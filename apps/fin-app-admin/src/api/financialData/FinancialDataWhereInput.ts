import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FinancialDataWhereInput = {
  expenses?: FloatNullableFilter;
  id?: StringFilter;
  income?: FloatNullableFilter;
  investments?: FloatNullableFilter;
};
