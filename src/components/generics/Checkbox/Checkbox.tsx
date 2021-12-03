import React from "react";
import { CheckboxProps } from "./constants";
import * as P from "./parts";

const Checkbox = ({ isChecked, onClick, label, isDisabled = false }: CheckboxProps) => {
  const handleOnClick = (event: React.MouseEvent) => {
    if (isDisabled) return;

    onClick(event);
  };

  return (
    <>
      {Boolean(label) && <P.Label>{label}</P.Label>}
      <P.Checkbox onClick={handleOnClick} isDisabled={isDisabled} isChecked={isChecked}>
        <P.CheckboxIcon isChecked={isChecked} />
      </P.Checkbox>
    </>
  );
};

export default Checkbox;
