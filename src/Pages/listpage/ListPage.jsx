import "./listpage.scss";
import { listData, userData, singlePostData } from "../../dummy/dummyData.js";
import Filter from "../../components/filter/Filter.jsx";
import ListCard from "../../components/listCard/ListCard.jsx";
import Map from "../../components/map/Map.jsx";

const ListPage = () => {
  return (
    <div className="listpage">
      <div className="listcontainer">
        <div className="wrapper">
          <Filter />

          {listData.map((list) => {
            return <ListCard key={list.id} data={list} />;
          })}
        </div>
      </div>
      <div className="mapcontainer">
        <Map items={listData} />
      </div>
    </div>
  );
};

export default ListPage;
