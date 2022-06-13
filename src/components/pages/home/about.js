import React, { useState } from "react";

const about = {
  header: "About Me",
  headerQuote: "Sharing a little bit of my story...",
  general: "General Overview",
  desc: `Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the industry's
  standard dummy text ever since the 1500s, when an unknown
  printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but
  also the leap into electronic typesetting, remaining
  essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum
  passages, and more recently with desktop publishing software
  like Aldus PageMaker including versions of Lorem Ipsum`,
  stat: "Statistics",
  smDesc: "And for those that don't fancy reading:",
  contactBtn: "Contact",
};

const sentences = [
  { id: 1, sent: "Male, 200 years old." },
  { id: 2, sent: "Five feet 110 inches" },
  { id: 3, sent: "Favorite fonts:Roboto" },
  { id: 4, sent: "Loves to learn new things" },
];

const About = () => {
  const [] = useState(about);
  return (
    <div>
      <div className='about' id='about'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='about-header'>
                <h1>{about.header}</h1>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='about-header-quote'>
                <h3>{about.headerQuote}</h3>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='about-general-description '>
              <div className='col-sm-8 col-md-8 '>
                <h2>{about.general}</h2>
                <p>{about.desc}</p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='statistic-row'>
              <div className='about-statistic-description'>
                <div className='col-sm-8 col-md-8'>
                  <h2>{about.stat}</h2>
                  <h5>
                    <em>{about.smDesc}</em>
                  </h5>
                  {sentences.map((item) => {
                    return <p key={item.id}>{item.sent}</p>;
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='about-option-buttons'>
              <div className='col-sm-2 col-md-2'>
                <a href='#contact' className='btn btn-default btn-black-border'>
                  {about.contactBtn}
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Include arrow to show timeline --> */}
        </div>
      </div>
    </div>
  );
};

export default About;
