import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const FinancialDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="expenses" source="expenses" />
        <NumberInput label="income" source="income" />
        <NumberInput label="investments" source="investments" />
      </SimpleForm>
    </Create>
  );
};
