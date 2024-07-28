import React from "react";
import { listData } from "../../dummy/dummyData";
import ListCard from "../listCard/ListCard";

const List = () => {
  return (
    <div>
      {listData.map((item) => (
        <ListCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default List;
