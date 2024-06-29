import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const FinancialDataEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="expenses" source="expenses" />
        <NumberInput label="income" source="income" />
        <NumberInput label="investments" source="investments" />
      </SimpleForm>
    </Edit>
  );
};
