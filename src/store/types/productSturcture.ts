interface Rules {
  required?: boolean;
  selectedInInputAsText?: boolean;
  isReadOnly?: boolean;
  childRequired?: boolean;
}

interface FieldBase {
  section: string;
  field: string;
  key: string;
  type: string;
  rules?: Rules;
  isApiCall?: string;
  isParent: boolean;
  data?: any[];
  children?: string[];
}

interface MultiSelectField extends FieldBase {
  type: "MultiSelect";
}

interface TextField extends FieldBase {
  type: "Text";
}

interface RadioField extends FieldBase {
  type: "Radio";
  data: { value: number; label: string }[];
}

interface DropdownField extends FieldBase {
  type: "Dropdown";
  data: string[] | number[];
}

interface DropdownTwoField extends FieldBase {
  type: "DropdownTwo";
  data: { label: string; value: number }[];
}

interface CheckboxField extends FieldBase {
  type: "Checkbox";
}

interface NumericField extends FieldBase {
  type: "Numeric";
}

interface SearchAbleDropdownField extends FieldBase {
  type: "SearchAbleDropdown";
}

interface DateField extends FieldBase {
  type: "Date";
}

interface GenericChildFields extends FieldBase {
  type: "GenericChildFields";
  children: string[];
}

interface TableField extends FieldBase {
  type: "Table";
  dataHeading: string[];
}

interface TLTableField extends FieldBase {
  type: "TLTable";
  dataHeading: { label: string; key: string; default: boolean }[];
  dataheadingColor: string[];
  dataheadingBgColor: string[];
  legend: string;
  otherFields?: FieldBase[];
}

interface DoubleInputField extends FieldBase {
  type: "DoubleInput";
}

interface SelectionBoxField extends FieldBase {
  type: "SelectionBox";
}

type Field =
  | MultiSelectField
  | TextField
  | RadioField
  | DropdownField
  | DropdownTwoField
  | CheckboxField
  | NumericField
  | SearchAbleDropdownField
  | DateField
  | GenericChildFields
  | TableField
  | TLTableField
  | DoubleInputField
  | SelectionBoxField;

interface Section {
  [key: string]: Field;
}

export interface StructureData {
  Product: Section;
  Claim: Section;
  Nutrients: Section;
  Ingredients: Section;
  Backend: Section;
  NutrientProfiling: Section;
  Group: Section;
}
