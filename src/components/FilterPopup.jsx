import React, { useState, useEffect } from "react";
import MatchMapping from "../MatchMapping";

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

    //сброс всех фильтров
    function handleResetFilters() {
      setSelectedFilters([]);
      onApply([]);
    }
    // применяю уже выбранные фильтры
    useEffect(() => {
      setSelectedFilters(selectedOptions);
    }, [selectedOptions]);

    // срабатывание по кнопке "применить"
    const handleApply = () => {
      onApply(selectedFilters);
      onClose();
    };

    // const popupRef = useRef();
    // функция для обработки клика вне всплывающего окна
    // const handleClickOutside = (event) => {
    //   if (popupRef.current && !popupRef.current.contains(event.target)) {
    //     // applyFilters(selectedFilters);
    //     // console.log("www");
    //     onApply(selectedFilters);
    //     onClose();
    //   }
    // };

    // useEffect(() => {
    //   // Функция для обработки кликов вне окна
    //   const handleClickOutside = (event) => {
    //     if (ref.current && !ref.current.contains(event.target)) {
    //       // Клик был вне окна, поэтому закрываем его
    //       // Здесь вы можете вызвать функцию или устанавливать состояние для закрытия окна
    //       console.log("Click outside the window. Close the window here.");
    //       onApply(selectedFilters);
    //       onClose();
    //     }
    //   };

    //   // Добавляем обработчик кликов на документе
    //   document.addEventListener("click", handleClickOutside);

    //   // Очищаем обработчик при размонтировании компонента
    //   return () => {
    //     document.removeEventListener("click", handleClickOutside);
    //   };
    // }, []);

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
                      style={{ background: MatchMapping[5].color }}
                    ></div>
                    <p className="desc_text">{MatchMapping[5].description}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="5"
                          className="hidden-checkbox"
                          checked={selectedFilters.includes("5")}
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
                      style={{ background: MatchMapping[1].color }}
                    ></div>
                    <p className="desc_text">{MatchMapping[1].description}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="1"
                          className="hidden-checkbox"
                          checked={selectedFilters.includes("1")}
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
                          checked={selectedFilters.includes("2")}
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
                          checked={selectedFilters.includes("3")}
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
                          checked={selectedFilters.includes("4")}
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
                    <div className="square" style={{ background: "#EA4335" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="17"
                        viewBox="0 -960 960 960"
                        width="17"
                        fill="white"
                      >
                        <path d="M705-128 447-388q-23 8-46 13t-47 5q-97 0-165-67.5T121-602q0-31 8-60.5t23-55.5l145 145 92-86-149-149q26-15 55-23.5t59-8.5q99 0 168.5 69.5T592-602q0 24-5 47t-13 46l259 258q11 11 11 26.5T833-198l-76 70q-11 11-26 11t-26-11Z" />
                      </svg>
                    </div>
                    <p className="desc_text">{"Не готов"}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="DW"
                          className="hidden-checkbox"
                          checked={selectedFilters.includes("DW")}
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
                      style={{ background: MatchMapping[0].color }}
                    ></div>
                    <p className="desc_text">{MatchMapping[0].description}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="0"
                          className="hidden-checkbox"
                          checked={selectedFilters.includes("0")}
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
                    <div className="square" style={{ background: "#4285F4" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="17"
                        viewBox="0 -960 960 960"
                        width="17"
                        fill="white"
                      >
                        <path d="M705-128 447-388q-23 8-46 13t-47 5q-97 0-165-67.5T121-602q0-31 8-60.5t23-55.5l145 145 92-86-149-149q26-15 55-23.5t59-8.5q99 0 168.5 69.5T592-602q0 24-5 47t-13 46l259 258q11 11 11 26.5T833-198l-76 70q-11 11-26 11t-26-11Z" />
                      </svg>
                    </div>
                    <p className="desc_text">{"HTP"}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="HTP"
                          className="hidden-checkbox"
                          checked={selectedFilters.includes("HTP")}
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
                    <div className="square" style={{ background: "#4285F4" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        viewBox="0 -960 960 960"
                        width="16"
                        fill="white"
                      >
                        <path d="m388-80-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185-480q0-9 .5-20.5T188-521L80-600l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669-710l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592-206L572-80H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z" />
                      </svg>
                    </div>
                    <p className="desc_text">{"Регламентные работы"}</p>
                    <div>
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          value="Reg"
                          className="hidden-checkbox"
                          checked={selectedFilters.includes("Reg")}
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
                            checked={selectedFilters.includes("C1")}
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
                            checked={selectedFilters.includes("C2")}
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
                            checked={selectedFilters.includes("C3")}
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
                            checked={selectedFilters.includes("C4")}
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
