import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RecommendationWhereInput = {
  additionalNotes?: StringNullableFilter;
  id?: StringFilter;
  recommendedActions?: StringNullableFilter;
  riskTolerance?: "Option1";
};
