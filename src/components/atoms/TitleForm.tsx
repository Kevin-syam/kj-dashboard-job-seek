import { title } from "process";
import { FunctionComponent } from "react";

interface TitleFormProps {
  title: string;
  subtitle: string;
}

const TitleForm: FunctionComponent<TitleFormProps> = ({ subtitle, title }) => {
  return (
    <>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-gray-400">{subtitle}</div>
    </>
  );
};

export default TitleForm;
