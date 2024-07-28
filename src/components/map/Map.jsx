import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

const Map = ({ items }) => {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={5}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((item, index) => {
        return (
          <Marker position={[item.latitude, item.longitude]} key={index}>
            <Popup>
              <div className="popupContainer">
                <img src={item.img} alt={item.title} />
                <div className="textContainer">
                  <Link to={"/property/" + item.id}>{item.title}</Link>
                  <span>
                    {item.bedroom > 1
                      ? item.bedroom + " " + "Bedrooms"
                      : item.bedroom + " " + "Bedroom"}
                  </span>
                  <b>${item.price}</b>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
