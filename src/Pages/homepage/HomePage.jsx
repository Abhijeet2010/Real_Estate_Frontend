import SearchInput from "../../components/navbar/searchInput/SearchInput";
import "./homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="textContent">
        <div className="wrapper">
          <h1>Discover Nearby Properties & Directly Chat with Owners </h1>
          <p>
            Find your dream home at an affordable price. Search for nearby
            properties and chat directly with owners to get all your questions
            answered quickly and easily.
          </p>

          <SearchInput />

          <div className="boxes">
            <div className="box">
              <h2>16+</h2>
              <p>Years of Experience</p>
            </div>

            <div className="box">
              <h2>200+</h2>
              <p>Awards Achieved</p>
            </div>

            <div className="box">
              <h2>10,000+</h2>
              <p>Properties Listed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContent">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
