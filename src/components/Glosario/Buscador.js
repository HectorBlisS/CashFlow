import React, {Component} from 'react';
import { Icon, Input, AutoComplete } from 'antd';
import './glosario.css';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

<div className="Buscador"> </div>


function onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return (new Array(getRandomInt(5))).join('.').split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      {item.query}
      <a
        href={`=${item.query}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.category}
      </a>

      <span className="global-search-item-count"> {item.count} </span>
    </Option>
  );
}

class Buscador extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      
      <div className="global-search-wrapper" style={{ width: 300 }}>
        
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '80%' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="Buscar"
          optionLabelProp="text"
        >


        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    </div>
    
  );
  }
}

export default Buscador;
