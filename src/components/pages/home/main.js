import React, { useState } from "react";

const intro = {
  hello: "Hello, I'm",
  name: "Vince",
  desc: "UI Developer. UX Designer. Problem Solver.",
  btn1: "Info",
  btn2: "Portfolio",
};

const Main = () => {
  const [] = useState(intro);

  return (
    <div className='main'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='entry-banner text-center'>
            <h1 id='hello'>{intro.hello}</h1>
            <h1 id='name'>{intro.name}</h1>
            <h1 id='person-description'>{intro.desc}</h1>
          </div>
        </div>

        <div className='row text-center'>
          <div className='banner-buttons'>
            <div className='col-sm-1 col-md-1 col-sm-offset-5 col-md-offset-5'>
              <a className='btn btn-default btn-border' href='#about'>
                {intro.btn1}
              </a>
            </div>

            <div className='col-sm-1 col-md-1'>
              <a className='btn btn-default btn-border' href='#projects'>
                {intro.btn2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
