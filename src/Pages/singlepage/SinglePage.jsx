import Slider from "../../components/slider/Slider";
import { singlePostData, userData } from "../../dummy/dummyData";
import Map from "../../components/map/Map";
import "./singlepage.scss";
import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const property = useLoaderData();
  console.log(property);
  return (
    <div className="singlepage">
      <div className="propertyInfo">
        <div className="wrapper">
          <Slider images={property.imges} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{property.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="pin" />
                  <span>{property.address}</span>
                </div>
                <strong>Rs: {property.price}</strong>
              </div>

              <div className="user">
                <img src={property.user.avatar} alt={userData.name} />
                <span>{property.user.username}</span>
              </div>
            </div>
            <div className="bottom">
              <p>{property.postDetail.desc}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="propertyFetures">
        <div className="wrapper">
          <p>Genral</p>
          <div className="verticalList">
            <div className="featureContainer">
              <img src="/bookmark.png" alt="utilites" />
              <div className="textContainer">
                <span className="main-text">Utilites</span>
                <span className="text">{property.postDetail.utlities}</span>
              </div>
            </div>

            <div className="featureContainer">
              <img src="/bookmark.png" alt="utilites" />
              <div className="textContainer">
                <span className="main-text">Pet Policy</span>
                <span className="text">{property.postDetail.pet}</span>
              </div>
            </div>

            <div className="featureContainer">
              <img src="/bookmark.png" alt="utilites" />
              <div className="textContainer">
                <span className="main-text">Property Fees</span>
                <span className="text">{property.postDetail.fees}</span>
              </div>
            </div>
          </div>

          <p>Room Sizes</p>

          <div className="roomInfoList">
            <div className="info">
              <img src="/bookmark.png" alt="size" />
              <span className="text">{property.postDetail.size} sqft</span>
            </div>

            <div className="info">
              <img src="/bedroom.png" alt="size" />
              <span className="text">{property.postDetail.bedroom} Bed </span>
            </div>

            <div className="info">
              <img src="/bathtub.png" alt="size" />
              <span className="text">
                {property.postDetail.bathroom} Bathroom
              </span>
            </div>
          </div>

          <p>Nearby Places</p>
          <div className="horizontalList">
            <div className="locationContainer">
              <img src="/bookmark.png" alt="school" />
              <div className="textContainer">
                <span className="main-text">School</span> <br />
                <span className="text">
                  {property.postDetail.school} km Away
                </span>
              </div>
            </div>

            <div className="locationContainer">
              <img src="/bookmark.png" alt="school" />
              <div className="textContainer">
                <span className="main-text">Bus Stop</span> <br />
                <span className="text">{property.postDetail.bus}km Away</span>
              </div>
            </div>

            <div className="locationContainer">
              <img src="/bookmark.png" alt="school" />
              <div className="textContainer">
                <span className="main-text">Restaurant</span> <br />
                <span className="text">
                  {property.postDetail.restaurant} m Away
                </span>
              </div>
            </div>
          </div>

          <p>Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              <span> Send A Message</span>
            </button>

            <button>
              <img src="/bookmark.png" alt="" />
              <span> Send A Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
