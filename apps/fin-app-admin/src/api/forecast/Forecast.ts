export type Forecast = {
  createdAt: Date;
  id: string;
  predictedExpenses: number | null;
  predictedIncome: number | null;
  predictedInvestments: number | null;
  updatedAt: Date;
};
