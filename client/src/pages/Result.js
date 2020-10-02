import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import './Result.css';
import { connect } from 'react-redux';
import * as planCheck from '../modules/destinations';
import * as plan from '../modules/plan';
import axios from 'axios';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  planToGo = (city) => {
    axios
      .post('https://codeflights.xyz/search/result/destination', { city: city })
      .then((res) => {
        this.props.getPlan(res.data);
        localStorage.plan = JSON.stringify(res.data);
        this.props.loaded(city);
      });
  };

  render() {
    let destination = this.props.place;
    if (destination.length === 0)
      destination = JSON.parse(localStorage.destinations);
    let city = destination.map((ele) => (
      <div onClick={() => this.planToGo(ele.destinations)}>
        {this.props.load && this.props.city === ele.destinations ? (
          this.props.history.push(`/result/${ele.destnation}`)
        ) : (
          <div className='where' style={{ backgroundImage: `url(${ele.img})` }}>
            <div className='titlelayer'>
              <h3>{ele.destinations}</h3>
            </div>
          </div>
        )}
      </div>
    ));

    return (
      <>
        <div className='result'>
          <div className='result-container'>
            <div className='result-title'>
              예정된 기간 동안 방문 가능한 {destination.length}개 도시 입니다.
            </div>
            <div className='cities'>{city}</div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    place: state.destinations.place,
    flights: state.plan.flights,
    blogPostings: state.plan.blogPostings,
    userPostings: state.plan.userPostings,
    load: state.plan.load,
    city: state.plan.city,
  }),
  (dispatch) => ({
    destinationsCheck: (data) => dispatch(planCheck.destinationsCheck(data)),
    getPlan: (data) => dispatch(plan.getPlan(data)),
    loaded: (data) => dispatch(plan.loaded(data)),
  })
)(withRouter(Result));
