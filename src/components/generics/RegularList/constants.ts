import React from "react";

export interface RegularListProps {
  resourceName: string;
  items: any[];
  itemComponent: React.FunctionComponent<any> | React.ComponentClass<any, any>;
}
