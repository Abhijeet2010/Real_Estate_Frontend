import { Link } from "react-router-dom";
import "./listcard.scss";

const ListCard = ({ data }) => {
  return (
    <div className="listcard">
      <div className="imgcontainer">
        <Link to={"/" + data.id}>
          <img src={data.img} alt={data.title} />
        </Link>
      </div>
      <div className="textcontainer">
        <h2 className="title">
          <Link to={"/" + data.id}>{data.title}</Link>
        </h2>
        <p className="address">
          <img src="./pin.svg" alt="" />
          <span>{data.address}</span>
        </p>

        <p className="price"> ${data.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <span>{data.bedroom} Bedroom</span>
            </div>

            <div className="feature">
              <span>{data.bathroom} Bathroom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
