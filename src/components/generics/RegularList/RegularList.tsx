import { RegularListProps } from "./constants";

const RegularList = ({ items, itemComponent: ItemComponent, resourceName }: RegularListProps) => {
  return (
    <>
      {items.map((item) => {
        return <ItemComponent {...{ [resourceName]: item }} />;
      })}
    </>
  );
};

export default RegularList;
