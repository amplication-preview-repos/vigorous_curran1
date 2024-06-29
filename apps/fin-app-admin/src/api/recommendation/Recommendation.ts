export type Recommendation = {
  additionalNotes: string | null;
  createdAt: Date;
  id: string;
  recommendedActions: string | null;
  riskTolerance?: "Option1" | null;
  updatedAt: Date;
};
