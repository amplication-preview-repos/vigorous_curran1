import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ForecastEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="predictedExpenses" source="predictedExpenses" />
        <NumberInput label="predictedIncome" source="predictedIncome" />
        <NumberInput
          label="predictedInvestments"
          source="predictedInvestments"
        />
      </SimpleForm>
    </Edit>
  );
};
