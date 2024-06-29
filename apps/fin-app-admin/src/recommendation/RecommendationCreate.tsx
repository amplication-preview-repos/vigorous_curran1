import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const RecommendationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="additionalNotes" multiline source="additionalNotes" />
        <TextInput
          label="recommendedActions"
          multiline
          source="recommendedActions"
        />
        <SelectInput
          source="riskTolerance"
          label="riskTolerance"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
