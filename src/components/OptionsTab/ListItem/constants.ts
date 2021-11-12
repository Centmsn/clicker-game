export interface ListItemProps {
  listItemData: {
    description: string;
    onClick: () => void;
    label?: string;
  };
}
