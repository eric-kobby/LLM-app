import PrimaryButton from "./PrimaryButton";
import DefaultButton from "./Default";
import { ButtonProps } from "../../types";

export default function Button(props: ButtonProps) {
  return props.theme === "primary" ? (
    <PrimaryButton {...props} />
  ) : (
    <DefaultButton {...props} />
  );
}
