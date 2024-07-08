import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h2>
        Search Result for, <strong>London</strong>
      </h2>

      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="city location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="any">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="property">Property</label>
          <select name="property" id="property">
            <option value="any">Any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            name="minPrice"
            id="minPrice"
            placeholder="any"
          />
        </div>

        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            name="maxPrice"
            id="maxPrice"
            placeholder="any"
          />
        </div>

        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input type="text" name="bedroom" id="bedroom" placeholder="any" />
        </div>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Filter;
