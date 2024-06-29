import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  additionalNotes?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recommendedActions?: SortOrder;
  riskTolerance?: SortOrder;
  updatedAt?: SortOrder;
};
