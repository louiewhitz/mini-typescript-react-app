import React from 'react';
import Customer from './components/customer'
import ClassCustomer from './components/customer-class'

import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold text-success">SIGN IN SHEET</p>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Porro totam, explicabo quibusdam ratione amet quo sequi sint ipsa aspernatur dolorum! 
              Ea quaerat distinctio voluptate laboriosam? Quae voluptatibus iure ab vitae?
              </p>
              <button className="btn btn-success btn-sm">Read More <i className="fa fa-book"></i></button>
              
            </div>
            <div className="row">
              <div className="col">
                <Customer name={'Louie'} age={31} title={'Software Engineer'}/>
            
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ClassCustomer name={'Jessy'} age={19} title={'Software Engineer'}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;
