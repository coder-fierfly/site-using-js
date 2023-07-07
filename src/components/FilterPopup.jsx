import React, { useState } from 'react';

const FilterPopup = ({ onClose, onApply }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== value)
      );
    }
  };

  const handleApply = () => {
    onApply(selectedFilters);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Filters</h2>

        <div>
          <label>
            <input
              type="checkbox"
              value="1"
              onChange={handleFilterChange}
            />
            зеленый квадрат
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="2"
              onChange={handleFilterChange}
            />
            yellow
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="3"
              onChange={handleFilterChange}
            />
            red
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="4"
              onChange={handleFilterChange}
            />
            crime
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="5"
              onChange={handleFilterChange}
            />
            grey
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="6"
              onChange={handleFilterChange}
            />
            light_blue
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="7"
              onChange={handleFilterChange}
            />
            blue
          </label>
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              value="С1"
              onChange={handleFilterChange}
            />
            C1
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="С2"
              onChange={handleFilterChange}
            />
            C2
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="С3"
              onChange={handleFilterChange}
            />
            C3
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="C4"
              onChange={handleFilterChange}
            />
            C4
          </label>
        </div>
        {/* Add more filter checkboxes as needed */}
        <button onClick={handleApply}>Apply Filters</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FilterPopup;