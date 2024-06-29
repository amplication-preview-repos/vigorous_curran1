import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const RecommendationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
