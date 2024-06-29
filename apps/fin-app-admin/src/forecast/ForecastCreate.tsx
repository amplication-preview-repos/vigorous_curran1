import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ForecastCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="predictedExpenses" source="predictedExpenses" />
        <NumberInput label="predictedIncome" source="predictedIncome" />
        <NumberInput
          label="predictedInvestments"
          source="predictedInvestments"
        />
      </SimpleForm>
    </Create>
  );
};
