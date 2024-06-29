import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RecommendationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Recommendations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="additionalNotes" source="additionalNotes" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="recommendedActions" source="recommendedActions" />
        <TextField label="riskTolerance" source="riskTolerance" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
