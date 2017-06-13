import React, { Component } from 'react';
import Search from './search'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    aqi: '',
    searchValue: '',
    message: '',
    color: '#000000',
    guidlines: '',
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
              message: 'Good: Air quality is considered satisfactory, and air pollution poses little or no risk',
              color: '#006342',
              guidelines: 'Safety Guidelines: None',
            })
          } else if (aqi > 50 && aqi <= 100 ) {
            this.setState({
              message: 'Moderate: Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution',
              color: '#FFDE33',
              guidelines: 'Safety Guidelines: Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion'
            })

          } else if (aqi > 100 && aqi <= 150) {
            this.setState({
              message: 'Unhealthy for Sensitive Groups: Members of sensitive groups may experience health effects. The general public is not likely to be affected',
              color: '#FF9933',
              guidelines: 'Safety Guidelines: Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion',
            })
          } else if (aqi > 150 && aqi <= 200) {
            this.setState({
              message: 'Unhealthy: Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects',
              color: '#800000',
              guidelines: 'Safety Guidelines: Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion',
            })
          } else if (aqi > 200 && aqi <= 300) {
            this.setState({
              message: 'Very Unhealthy: Health warnings of emergency conditions. The entire population is more likely to be affected',
              color: '#660099',
              guidelines: 'Safety Guidelines: Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion',

            })
          } else {
            this.setState({
              message: 'Hazardous: Health alert: everyone may experience more serious health effects',
              color: '#7E0023',
              guidelines: 'Safety Guidelines: Everyone should avoid all outdoor exertion',
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
        <h3 className="aqi-result" style={{color:this.state.color}}>{this.state.aqi}</h3>
        <p className="message">{this.state.message}</p>
        <p className="guidelines">{this.state.guidelines}</p>
        <p className="learnMore">Learn more <a href="http://aqicn.org/map/" target="_blank">here</a></p>
      </div>
    );
  }
}

export default App;
