import { RegularListProps } from "./constants";
import * as P from "./parts";

const RegularList = ({ items, itemComponent: ItemComponent, resourceName }: RegularListProps) => {
  return (
    <P.List>
      {items.map((item) => {
        return <ItemComponent {...{ [resourceName]: item }} />;
      })}
    </P.List>
  );
};

export default RegularList;
