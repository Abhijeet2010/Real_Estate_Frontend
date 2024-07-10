import { Link } from "react-router-dom";
import "./listcard.scss";

const ListCard = ({ data }) => {
  return (
    <div className="listcard">
      <div className="imgcontainer">
        <Link to={"/property/" + data.id}>
          <img src={data.img} alt={data.title} />
        </Link>
      </div>
      <div className="textcontainer">
        <h2 className="title">
          <Link to={"/property/" + data.id}>{data.title}</Link>
        </h2>
        <p className="address">
          <img src="./pin.svg" alt="" />
          <span>{data.address}</span>
        </p>

        <p className="price"> ${data.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <span>
                <img src="./bedroom.png" alt="" /> {data.bedroom} Bedrooms
              </span>
            </div>

            <div className="feature">
              <span>
                <img src="./bathtub.png" alt="ab-estate" />
                {data.bathroom} Bathroom
              </span>
            </div>

            <div className="icons">
              <div className="savedPost bottom-icons">
                <img src="/bookmark.png" alt="" />
              </div>
              <div className="chat bottom-icons">
                <img src="./chat.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
