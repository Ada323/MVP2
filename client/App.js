import React from 'react';
// import Search from './search'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    aqi: '',
    searchValue: ''
  }
};

  // handleSearchChange = (e) => {
  //   e.preventDefault();
  //   const value = e.target.value;
  //
  //   this.setState({
  //     searchValue: value,
  //   });
  //
  //   if (value === '') {
  //     this.setState({
  //       aqi: ''
  //     });
  //   } else {
  //     Search.search(value, (aqi) => {
  //       this.setState({
  //         aqi: 'TEST',
  //       });
  //     });
  //   }


// Place these in input field
  // value={this.state.searchValue}
  // onChange={this.handleSearchChange}

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>SMOG REPORT</h2>
        </div>
        <p className="App-intro">
        Find out if your air is safe in realtime
        </p>
        <div className="search-bar form-inline">
        <input
        className="form-control"
        type="text"
        placeholder="Search by City"
        />
        </div>
        <h3 className="aqi-result">{this.state.aqi}</h3>
      </div>
    );
  }
}

export default App;
