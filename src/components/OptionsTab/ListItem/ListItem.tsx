import Button from "components/generics/Button";
import { ListItemProps } from "./constants";
import * as P from "./parts";

const ListItem = ({ listItemData }: ListItemProps) => {
  return (
    <P.Wrapper>
      <P.Description>{listItemData.description}</P.Description>
    </P.Wrapper>
  );
};

export default ListItem;
