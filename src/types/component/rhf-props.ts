import {ImagePreview} from "src/types/component/image.ts";
import {FieldValues} from "react-hook-form";

export interface RHFFormProps extends FieldValues {
  text: string,
  checkbox: boolean,
  multicheckbox: string[],
  select: string,
  date: unknown,
  radiogroup: string,
  switch: boolean,
  editor: unknown,
  upload_avatar: unknown,
  upload_single_file: unknown
  upload_multi_file: ImagePreview[]
}