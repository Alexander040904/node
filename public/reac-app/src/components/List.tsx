import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);

  const name = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => name(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
