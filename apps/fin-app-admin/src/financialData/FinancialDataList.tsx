import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FinancialDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FinancialDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="expenses" source="expenses" />
        <TextField label="ID" source="id" />
        <TextField label="income" source="income" />
        <TextField label="investments" source="investments" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
