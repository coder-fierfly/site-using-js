import React, { useState, useEffect, useRef } from "react";
import MatchMapping from "../MatshMapping";

const FilterPopup = React.forwardRef(
  ({ onClose, onApply, selectedOptions }, ref) => {
    // индекс для выпадающих фильтров
    const [selectedIndex, setSelectedIndex] = useState([1]);
    const handleClick = (index) => {
      // Если элемент уже выбран
      if (selectedIndex.includes(index)) {
        const updatedIndex = selectedIndex.filter((item) => item !== index);
        setSelectedIndex(updatedIndex);
        // Иначе устанавливаем индекс в значение параметра
      } else {
        const newIndex = [...selectedIndex, index]; // newIndexValue - новое значение, которое нужно добавить
        setSelectedIndex(newIndex);
      }
    };

    // выбранные фильтры
    const [selectedFilters, setSelectedFilters] = useState([]);

    // для уставки выбранных фильтров
    function handleFilterChange(event) {
      const { value, checked } = event.target;
      if (checked) {
        setSelectedFilters((prevFilters) => [...prevFilters, value]);
      } else {
        setSelectedFilters((prevFilters) =>
          prevFilters.filter((filter) => filter !== value)
        );
      }
    }

    useEffect(() => {
      onApply(selectedFilters);
    }, [selectedFilters, onApply]);
    //сброс всех фильтров
    const handleResetFilters = () => {
      setSelectedFilters([]);
      onApply([]);
      onClose();
    };
    // применяю уже выбранные фильтры
    useEffect(() => {
      setSelectedFilters(selectedOptions);
    }, [selectedOptions]);

    // срабатывание по кнопке "применить"
    const handleApply = () => {
      onApply(selectedFilters);
      onClose();
    };
    // добавляем обработчик события для кликов вне всплывающего окна
    // useEffect(() => {
    //   function handleClickOutside(event) {
    //     if (popupRef.current && !popupRef.current.contains(event.target)) {
    //       onClose();
    //     }
    //   }

    //   document.addEventListener("mousedown", handleClickOutside);
    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // }, [onClose]);

    return (
      <div className="popup">
        <div className="popup-content">
          <div className="padding-popup-content">
            <div className="filters" ref={ref}>
              <div className="top_popup">
                <button className="reset_button" onClick={handleResetFilters}>
                  Сбросить
                </button>
                <p className="filter_text">Фильтры</p>
              </div>

              <div className="signal_wrapper">
                <p className="signal_text">Сигналы</p>

                <button
                  className="more_filter_btn"
                  onClick={() => handleClick(1)}
                >
                  {selectedIndex.includes(1) ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="arrow up"
                        d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
                        fill="#0079F7"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="arrow down"
                        d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
                        fill="#515357"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {selectedIndex.includes(1) ? (
                <>
                  <div className="checkbox_line">
                    <div
                      className="square"
                      style={{ background: MatchMapping[0].color }}
                    ></div>
                    <p className="desc_text">{MatchMapping[0].description}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="0"
                          className="hidden-checkbox"
                          defaultChecked={selectedOptions.includes("0")}
                          onChange={handleFilterChange}
                        />
                        <span className="checkmark"></span>
                        <svg
                          className="tick-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>{" "}
                  <div className="checkbox_line">
                    <div
                      className="square"
                      style={{ background: MatchMapping[1].color }}
                    ></div>
                    <p className="desc_text">{MatchMapping[1].description}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="1"
                          className="hidden-checkbox"
                          defaultChecked={selectedOptions.includes("1")}
                          onChange={handleFilterChange}
                        />
                        <span className="checkmark"></span>
                        <svg
                          className="tick-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="checkbox_line">
                    <div
                      className="square"
                      style={{ background: MatchMapping[2].color }}
                    ></div>
                    <p className="desc_text">{MatchMapping[2].description}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="2"
                          className="hidden-checkbox"
                          defaultChecked={selectedOptions.includes("2")}
                          onChange={handleFilterChange}
                        />
                        <span className="checkmark"></span>
                        <svg
                          className="tick-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="checkbox_line">
                    <div
                      className="square"
                      style={{ background: MatchMapping[3].color }}
                    ></div>
                    <p className="desc_text">{MatchMapping[3].description}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="3"
                          className="hidden-checkbox"
                          defaultChecked={selectedOptions.includes("3")}
                          onChange={handleFilterChange}
                        />
                        <span className="checkmark"></span>
                        <svg
                          className="tick-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                  <div className="checkbox_line">
                    <div
                      className="square"
                      style={{ background: MatchMapping[4].color }}
                    ></div>
                    <p className="desc_text">{MatchMapping[4].description}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="4"
                          className="hidden-checkbox"
                          defaultChecked={selectedOptions.includes("4")}
                          onChange={handleFilterChange}
                        />
                        <span className="checkmark"></span>
                        <svg
                          className="tick-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                            fill="white"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>
                  {/* <div className="checkbox_line">
                  <div
                    className="square"
                    style={{ background: MatchMapping[5].color }}
                  ></div>
                  <p className="desc_text">{MatchMapping[5].description}</p>
                  <div>
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        value="5"
                        className="hidden-checkbox"
                        defaultChecked={selectedOptions.includes("5")}
                        onChange={handleFilterChange}
                      />
                      <span className="checkmark"></span>
                      <svg
                        className="tick-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                          fill="white"
                        />
                      </svg>
                    </label>
                  </div>
                </div> */}
                  {/* <div className="checkbox_line">
                  <div
                    className="square"
                    style={{ background: MatchMapping[6].color }}
                  ></div>
                  <p className="desc_text">{MatchMapping[6].description}</p>
                  <div>
                    <label className="custom-checkbox">
                      <input
                        type="checkbox"
                        value="6"
                        className="hidden-checkbox"
                        defaultChecked={selectedOptions.includes("6")}
                        onChange={handleFilterChange}
                      />
                      <span className="checkmark"></span>
                      <svg
                        className="tick-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                          fill="white"
                        />
                      </svg>
                    </label>
                  </div>
                </div> */}
                </>
              ) : null}

              <div className="danger_wrapper">
                <p className="danger_text">Класс опасности</p>
                <button
                  className="more_filter_btn"
                  onClick={() => handleClick(2)}
                >
                  {selectedIndex.includes(2) ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="arrow up"
                        d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
                        fill="#0079F7"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="arrow down"
                        d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
                        fill="#515357"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div className="wrapper_hazard_class">
                {selectedIndex.includes(2) ? (
                  <>
                    <div className="wrapper_danger_checkbox">
                      <div className="item_danger_checkbox">
                        <p className="text_danger_checkbox">C1</p>
                        <label className="custom-checkbox danger_checkbox">
                          <input
                            type="checkbox"
                            value="C1"
                            className="hidden-checkbox"
                            defaultChecked={selectedOptions.includes("C1")}
                            onChange={handleFilterChange}
                          />
                          <span className="checkmark"></span>
                          <svg
                            className="tick-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                              fill="white"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>
                    <div className="wrapper_danger_checkbox">
                      <div className="item_danger_checkbox">
                        <p className="text_danger_checkbox">C2</p>
                        <label className="custom-checkbox danger_checkbox">
                          <input
                            type="checkbox"
                            value="C2"
                            className="hidden-checkbox"
                            defaultChecked={selectedOptions.includes("C2")}
                            onChange={handleFilterChange}
                          />
                          <span className="checkmark"></span>
                          <svg
                            className="tick-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                              fill="white"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>
                    <div className="wrapper_danger_checkbox">
                      <div className="item_danger_checkbox">
                        <p className="text_danger_checkbox">C3</p>
                        <label className="custom-checkbox danger_checkbox">
                          <input
                            type="checkbox"
                            value="C3"
                            className="hidden-checkbox"
                            defaultChecked={selectedOptions.includes("C3")}
                            onChange={handleFilterChange}
                          />
                          <span className="checkmark"></span>
                          <svg
                            className="tick-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                              fill="white"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>
                    <div className="wrapper_danger_checkbox">
                      <div className="item_danger_checkbox">
                        <p className="text_danger_checkbox">C4</p>
                        <label className="custom-checkbox danger_checkbox">
                          <input
                            type="checkbox"
                            value="C4"
                            className="hidden-checkbox"
                            defaultChecked={selectedOptions.includes("C4")}
                            onChange={handleFilterChange}
                          />
                          <span className="checkmark"></span>
                          <svg
                            className="tick-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M6.9999 14.2L2.7999 9.99998L1.3999 11.4L6.9999 17L18.9999 4.99998L17.5999 3.59998L6.9999 14.2Z"
                              fill="white"
                            />
                          </svg>
                        </label>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
              <button className="apply_btn" onClick={handleApply}>
                <p className="apply">Применить</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default FilterPopup;
