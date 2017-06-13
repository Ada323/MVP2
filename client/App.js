import React, { Component } from 'react';
import Search from './search'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    aqi: '',
    searchValue: '',
    message: '',
    ranking: 'default',
  }
};

  handleSearchChange(e) {
    e.preventDefault();
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        aqi: ''
      });
    } else {
      Search.search(value, (aqi) => {
        if (aqi) {
          if (aqi > 0 && aqi <= 50) {
            this.setState({
              message: 'Good: Air quality is considered satisfactory, and air pollution poses little or no risk.',
              ranking: 'good',
            })
          } else if (aqi > 50 && aqi <= 100 ) {
            this.setState({
              message: 'Moderate: Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
              ranking: 'moderate',
            })

          } else if (aqi > 100 && aqi <= 150) {
            this.setState({
              message: 'Unhealthy for Sensitive Groups: Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
              ranking: 'sensitive',
            })
          } else if (aqi > 150 && aqi <= 200) {
            this.setState({
              message: 'Unhealthy: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
              ranking: 'unhealthy',
            })
          } else if (aqi > 200 && aqi <= 300) {
            this.setState({
              message: 'Very Unhealthy: Health warnings of emergency conditions. The entire population is more likely to be affected.',
              ranking: 'veryUnhealthy',

            })
          } else {
            this.setState({
              message: 'Hazardous: Health warnings of emergency conditions. The entire population is more likely to be affected.',
              ranking: 'hazardous',
            })
          }
          this.setState({
            aqi: `Current air quality: ${aqi}`,
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>SMOG REPORT</h2>
        </div>
        <div className="search-bar form-inline">
        <input
        className="form-control"
        type="text"
        placeholder="Search by City"
        value={this.state.searchValue}
        onChange={this.handleSearchChange.bind(this)}
        />
        </div>
        <div className="{this.state.ranking}">
        <h3 className="aqi-result">{this.state.aqi}</h3>
        <p className="message">{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default App;
