import { FormEventHandler } from "react";

export type SearchPropTypes = {
  onSubmitHandler: FormEventHandler<HTMLFormElement> | undefined;
};
