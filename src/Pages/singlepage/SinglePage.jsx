import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../dummy/dummyData";
import "./singlepage.scss";

const SinglePage = () => {
  return (
    <div className="singlepage">
      <div className="propertyInfo">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <strong>${singlePostData.price}</strong>
              </div>

              <div className="user">
                <img src={userData.img} alt={userData.name} />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              <p>{singlePostData.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="propertyFetures">
        <div className="wrapper"></div>
      </div>
    </div>
  );
};

export default SinglePage;
