export interface IItem {
  icon: JSX.Element;
  link?: string;
  selected: boolean;
  query?: { parameter: string; value: string };
  Layout?: JSX.Element;
}
