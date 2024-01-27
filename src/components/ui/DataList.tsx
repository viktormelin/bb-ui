import { ReactNode } from 'react';
import Text from './Text';

export interface DataListItem {
  id: string;
  header: string;
  text?: string;
  actions?: ReactNode;
}

export interface DataListProps {
  data: DataListItem[];
}

const DataList = ({ data }: DataListProps) => {
  return (
    <ul className="flex flex-col items-center gap-2 my-4">
      {data.map((item) => (
        <li
          key={item.id}
          className="rounded-lg w-full flex justify-between items-center"
        >
          <div>
            <Text variant="xl">{item.header}</Text>
            {item.text && <Text variant="xs">{item.text}</Text>}
          </div>
          {item.actions && <div>{item.actions}</div>}
        </li>
      ))}
    </ul>
  );
};

export default DataList;
