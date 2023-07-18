import React, { useState, useEffect } from 'react';

const FilterPopup = ({ onClose, onApply, selectedOptions }) => {
  
  // выбранные фильтры
  const [selectedFilters, setSelectedFilters] = useState([]);

  // для уставки выбранных фильтров
  function handleFilterChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters((prevFilters) => [...prevFilters, value]);
    } else {
      setSelectedFilters((prevFilters) => prevFilters.filter((filter) => filter !== value)
      );
    }
  }

  // применяю уже выбранные фильтры
  useEffect(() => {
    setSelectedFilters(selectedOptions);
  }, []);

  // срабатывание по кнопке "применить"
  const handleApply = () => {
    onApply(selectedFilters);
    onClose();
  };

  return (
    <div className='popup'>
      <div className='popup-content'>
        <div className='padding-popup-content'>
          <div className='checkbox_group'>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='1'
                  defaultChecked={selectedOptions.includes('1')}
                  onChange={handleFilterChange}
                />
                <div className='square green_sq'></div>
              </label>
            </div>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='2'
                  defaultChecked={selectedOptions.includes('2')}
                  onChange={handleFilterChange}
                />
                <div className='square yellow_sq'></div>
              </label>
            </div>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='3'
                  defaultChecked={selectedOptions.includes('3')}
                  onChange={handleFilterChange}
                />
                <div className='square red_sq'></div>
              </label>
            </div>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='4'
                  defaultChecked={selectedOptions.includes('4')}
                  onChange={handleFilterChange}
                />
                <div className='square crime_sq'></div>
              </label>
            </div>
          </div>
          <div className='checkbox_group c_line'>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='5'
                  defaultChecked={selectedOptions.includes('5')}
                  onChange={handleFilterChange}
                />
                <div className='square grey_sq'></div>
              </label>
            </div>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='6'
                  defaultChecked={selectedOptions.includes('6')}
                  onChange={handleFilterChange}
                />
                <div className='square lb_sq'></div>
              </label>
            </div>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='7'
                  defaultChecked={selectedOptions.includes('7')}
                  onChange={handleFilterChange}
                />
                <div className='square blue_sq'></div>
              </label>
            </div>
          </div>
          <div className='checkbox_group'>

            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='C1'
                  defaultChecked={selectedOptions.includes('C1')}
                  onChange={handleFilterChange}
                />
                <div className='square word'>C1</div>

              </label>
            </div>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='C2'
                  defaultChecked={selectedOptions.includes('C2')}
                  onChange={handleFilterChange}
                />
                <div className='square word'>C2</div>
              </label>
            </div>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='C3'
                  defaultChecked={selectedOptions.includes('C3')}
                  onChange={handleFilterChange}
                />
                <div className='square word'>C3</div>
              </label>
            </div>
            <div className='checkbox_line'>
              <label>
                <input className='checkbox'
                  type='checkbox'
                  value='C4'
                  defaultChecked={selectedOptions.includes('C4')}
                  onChange={handleFilterChange}
                />
                <div className='square word'>C4</div>
              </label>
            </div>
          </div>
          <button className='apply_btn' onClick={handleApply}>
            <p className='apply'>Применить</p></button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;