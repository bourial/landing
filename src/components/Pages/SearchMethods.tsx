import React from "react";
import { useState } from "react";
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';
import type { SelectProps } from 'antd';  

const SearchMethods:React.FC = ()=>{

  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value: string[]) => {
    setSelectedCountries(value);
  };

  const options: SelectProps['options'] = [
    {
      label: 'China',
      value: 'china',
      emoji: '🇨🇳',
      desc: 'China (中国)',
    },
    {
      label: 'USA',
      value: 'usa',
      emoji: '🇺🇸',
      desc: 'USA (美国)',
    },
    {
      label: 'Japan',
      value: 'japan',
      emoji: '🇯🇵',
      desc: 'Japan (日本)',
    },
    {
      label: 'Korea',
      value: 'korea',
      emoji: '🇰🇷',
      desc: 'Korea (韩国)',
    },
  ];

    return (
      <div className="searchMethods-section">

        <div className="searchMethod-container">
          <div className="filterIConContainer"><img className="filter-iCon" src="/images/Search.png"/></div>
            
            <div className="all-selectMethods">
            <Space direction="vertical">
            <DatePicker
              className="datepicker"
              onChange={onChange}
              placeholder="DD-MM-YYYY"
              suffixIcon={<img src="/images/Calendar.svg" alt="Calendar" />} // Use the absolute path
            />
            </Space>

            <Select
              mode="multiple"
              className="select-items-checkbox"
              placeholder="select one country"
              onChange={handleChange}
              value={selectedCountries}
              optionLabelProp="label"
              options={options}
              menuItemSelectedIcon={false}
              optionRender={(option) => (
                <Space>
                  <input
                    type="checkbox"
                    checked={selectedCountries.includes(option.value as string)}
                    onChange={() => handleChange(
                      selectedCountries.includes(option.value as string)
                        ? selectedCountries.filter((country) => country !== option.value)
                        : [...selectedCountries, option.value as string]
                    )}
                  />
                  {option.label}
                </Space>
              )}
            />

            <Select showSearch
              className="select-items-list"
              style={{ width: 200 }}
              placeholder="Search to Select"
              optionFilterProp="children"
              filterOption={(input:any, option:any) => (option?.label ?? '').includes(input)}
              filterSort={(optionA:any, optionB:any) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                {
                  value: '1',
                  label: 'Not Identified',
                },
                {
                  value: '2',
                  label: 'Closed',
                },
                {
                  value: '3',
                  label: 'Communicated',
                },
                {
                  value: '4',
                  label: 'Identified',
                },
                {
                  value: '5',
                  label: 'Resolved',
                },
                {
                  value: '6',
                  label: 'Cancelled',
                },
                ]}
            />
            </div>

            <button className="searchMethodes-btn">
              <img src="/images/Search.svg" className="Search-icon"/>
              SEARCH
            </button>
          </div><br></br>
      </div>
    );
};
export default SearchMethods;