import React from "react";

const Summary = () => {
  return (
    <div>
      <div className='summary'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='development-summary'>
              <div className='col-sm-1 col-md-1'>
                <div className='development-img'>
                  <img
                    className='img-responsive'
                    src='./images/developerdesign.svg'
                  />
                </div>
              </div>

              <div className='col-sm-4 col-md-4'>
                <div className='development-description'>
                  <h3>Development and Design</h3>
                  <p>
                    I aim to put my creativity to the test, designing and
                    building unique, meaningful products for clients or merely
                    for my own interests.
                  </p>
                </div>
              </div>
            </div>

            <div className='responsive-summary'>
              <div className='col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2'>
                <div className='responsive-img'>
                  <img
                    className='img-responsive'
                    src='./images/responsivedesign.svg'
                  />
                </div>
              </div>

              <div className='col-sm-4 col-md-4'>
                <div className='responsive-description'>
                  <h3>Responsive Layouts</h3>
                  <p>
                    Development and design isn't merely putting information on
                    the site or preferred media outlet. I organize content and
                    present information in an engaging fashion, driving new and
                    unique layouts in tandem with novel solutions and cool
                    animations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='ideas-summary'>
              <div className='col-sm-1 col-md-1'>
                <div className='idea-img'>
                  <img
                    className='img-responsive'
                    src='./images/innovativesolutions.svg'
                  />
                </div>
              </div>

              <div className='col-sm-4 col-md-4'>
                <div className='idea-description'>
                  <h3>Ideas and Solutions</h3>
                  <p>
                    There are still many problems that exist in today's society,
                    including laziness. Luckily, I hope to combat these issues
                    by innovating, developing easy-to-use programs, solutions,
                    or products.
                  </p>
                </div>
              </div>
            </div>

            <div className='passion-summary'>
              <div className='col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2'>
                <img className='img-responsive' src='./images/passion.svg' />
              </div>

              <div className='col-sm-4 col-md-4'>
                <div className='passion-description'>
                  <h3>Passion and Dedication</h3>
                  <p>
                    With my profound interest and commitment to my field of
                    study, my projects rarely go unfinished and my problems are
                    never left unresolved.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='projects' id='projects'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='projects-header'>
                <h1>Projects and Portfolio</h1>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='projects-header-quote'>
                <h3>Sharing my endeavors and passions...</h3>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-4 col-md-4 text-center'>
              <div className='luvtalk-project'>
                <h3>LUV TALK Website</h3>
                <p>
                  Website, created during my first internship, which utilized
                  HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress.{" "}
                </p>
                <div className='row'>
                  <div className='col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4'>
                    <div className='project-more-info'>
                      <a className='btn btn-default btn-border' href='#'>
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-4 col-md-4 text-center'>
              <div className='personal-website-project'>
                <h3>Personal Website</h3>
                <p>
                  Enjoyable side project that was created to experiment with
                  more HTML and CSS, but also provided an outlet to showcase my
                  abilities and interests.
                </p>
                <div className='row'>
                  <div className='col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4'>
                    <div className='project-more-info'>
                      <a className='btn btn-default btn-border' href='#'>
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-sm-4 col-md-4 text-center'>
              <div className='strike-zone-project'>
                <h3>Strike Zone Analysis</h3>
                <p>
                  Data analytics project completed during my time at the
                  Illinois Math and Science Academy which studied the baseball
                  strike zone based on the state of the game.
                </p>
                <div className='row'>
                  <div className='col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4'>
                    <div className='project-more-info'>
                      <a className='btn btn-default btn-border' href='#'>
                        More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-2 col-md-2 col-sm-offset-5 col-md-offset-5'>
              <div className='see-more-button'>
                <a className='btn btn-default btn-border' href='#'>
                  More Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact' id='contact'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='contact-header'>
                <h1>Contact</h1>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-12 col-md-12 text-center'>
              <div className='contact-header-quote'>
                <h4>"XXXXX"</h4>
                <h4>-XXX</h4>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-6 col-md-6'>
              <div className='contact-instructions'>
                <h2>Reaching out to me</h2>
                <p>
                  Don't be afraid to contact me! I'm happy to answer any
                  questions, provide more information, or just have a nice
                  conversation! Fill out the form below to being reaching out to
                  me. If you prefer another email client other than your
                  default, which will appear after clicking the button and have
                  all of the information you just entered, you can email me at
                  XXXXX.
                </p>
                {/* </br>
							</br>
							</br> */}
                <h2>Contact Information</h2>
                <p>XXXX</p>
                <p>XXXX</p>
                <p>(XXXX)-445-7747</p>
                <p>XXXXXX@gmail.com</p>
              </div>
            </div>

            <div className='col-sm-6 col-md-6'>
              <div className='contact-form-body'>
                <form>
                  <div className='row'>
                    <div className='col-sm-6 col-md-6'>
                      <div className='firstname'>
                        <h4>Full Name *</h4>
                        <input type='text' placeholder='First Name' />
                      </div>
                    </div>

                    <div className='col-sm-6 col-md-6'>
                      <div className='lastname'>
                        <h4>Full Name *</h4>
                        <input type='text' placeholder='Last Name' />
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-12 col-md-12'>
                      <div className='email'>
                        <h4>Email *</h4>
                        <input type='text' placeholder='Email' />
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-12 col-md-12'>
                      <div className='message'>
                        <h4>Message *</h4>
                        <textarea placeholder='Message'></textarea>
                      </div>
                    </div>
                  </div>

                  <div className='row'>
                    <div className='col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4'>
                      <div className='submit-contact'>
                        <a className='btn btn-default btn-border' href='#'>
                          Submit
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
