import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ForecastList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Forecasts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="predictedExpenses" source="predictedExpenses" />
        <TextField label="predictedIncome" source="predictedIncome" />
        <TextField label="predictedInvestments" source="predictedInvestments" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
