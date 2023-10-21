import { StyledListItems, StyledNavLink } from "../components/ListItem";
import StyledMain from "../components/Main";
import StyledNavBar from "../components/NavBar";
import StyledPageContainer from "../components/Page";
import StyledAside from "../components/SideBar";

export default function Dashboard() {
  return (
    <StyledPageContainer>
      <StyledAside>
        <StyledNavBar>
          <h1 className="aside-logo">Marble</h1>
          <ul>
            <StyledListItems>
              <StyledNavLink to="/dashboard">Home</StyledNavLink>
            </StyledListItems>
            <StyledListItems>
              <StyledNavLink to="/book">Book</StyledNavLink>
            </StyledListItems>
            <StyledListItems>
              <StyledNavLink to="/cabin">Cabins</StyledNavLink>
            </StyledListItems>
            <StyledListItems>
              <StyledNavLink to="/settings">Settings</StyledNavLink>
            </StyledListItems>
          </ul>
        </StyledNavBar>
      </StyledAside>
      <StyledMain>
        <aside id="fh5co-hero" className="js-fullheight">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li>
                <div className="overlay"></div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <h1>
                          Intuitive <strong></strong> is How Give We the User
                          New Superpowers
                        </h1>
                        <h2>
                          Free html5 templates Made by <span>freehtml5.co</span>
                        </h2>
                        <p>
                          <span className="btn btn-primary btn-demo popup-vimeo">
                            <i className="icon-monitor"></i> Live Preview
                          </span>
                          <a className="btn btn-primary btn-learn">
                            Learn More<i className="icon-arrow-right3"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>

        <div className="fh5co-narrow-content">
          <h2
            className="fh5co-heading animate-box"
            data-animate-effect="fadeInLeft"
          >
            Services
          </h2>
          <div className="row">
            <div className="col-md-6">
              <div
                className="fh5co-feature animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="fh5co-icon">
                  <i className="icon-settings"></i>
                </div>
                <div className="fh5co-text">
                  <h3>Strategy</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="fh5co-feature animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="fh5co-icon">
                  <i className="icon-search4"></i>
                </div>
                <div className="fh5co-text">
                  <h3>Explore</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="fh5co-feature animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="fh5co-icon">
                  <i className="icon-paperplane"></i>
                </div>
                <div className="fh5co-text">
                  <h3>Direction</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="fh5co-feature animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="fh5co-icon">
                  <i className="icon-params"></i>
                </div>
                <div className="fh5co-text">
                  <h3>Expertise</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fh5co-narrow-content">
          <h2
            className="fh5co-heading animate-box"
            data-animate-effect="fadeInLeft"
          >
            Recent Blog
          </h2>
          <div className="row row-bottom-padded-md">
            <div
              className="col-md-3 col-sm-6 col-padding animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="blog-entry">
                <a href="#" className="blog-img">
                  <img
                    src="images/img-1.jpg"
                    className="img-responsive"
                    alt="Free HTML5 Bootstrap Template by FreeHTML5.co"
                  />
                </a>
                <div className="desc">
                  <h3>
                    <a href="#">Inspirational Website</a>
                  </h3>
                  <span>
                    <small>by Admin </small> / <small> Web Design </small> /
                    <small>
                      <i className="icon-comment"></i> 14
                    </small>
                  </span>
                  <p>
                    Design must be functional and functionality must be
                    translated into visual aesthetics
                  </p>
                  <a href="#" className="lead">
                    Read More <i className="icon-arrow-right3"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-padding animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="blog-entry">
                <a href="#" className="blog-img">
                  <img
                    src="images/img-2.jpg"
                    className="img-responsive"
                    alt="Free HTML5 Bootstrap Template by FreeHTML5.co"
                  />
                </a>
                <div className="desc">
                  <h3>
                    <a href="#">Inspirational Website</a>
                  </h3>
                  <span>
                    <small>by Admin </small> / <small> Web Design </small> /
                    <small>
                      <i className="icon-comment"></i> 14
                    </small>
                  </span>
                  <p>
                    Design must be functional and functionality must be
                    translated into visual aesthetics
                  </p>
                  <a href="#" className="lead">
                    Read More <i className="icon-arrow-right3"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-padding animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="blog-entry">
                <a href="#" className="blog-img">
                  <img
                    src="images/img-3.jpg"
                    className="img-responsive"
                    alt="Free HTML5 Bootstrap Template by FreeHTML5.co"
                  />
                </a>
                <div className="desc">
                  <h3>
                    <a href="#">Inspirational Website</a>
                  </h3>
                  <span>
                    <small>by Admin </small> / <small> Web Design </small> /
                    <small>
                      <i className="icon-comment"></i> 14
                    </small>
                  </span>
                  <p>
                    Design must be functional and functionality must be
                    translated into visual aesthetics
                  </p>
                  <a href="#" className="lead">
                    Read More <i className="icon-arrow-right3"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-3 col-sm-6 col-padding animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="blog-entry">
                <a href="#" className="blog-img">
                  <img
                    src="images/img-4.jpg"
                    className="img-responsive"
                    alt="Free HTML5 Bootstrap Template by FreeHTML5.co"
                  />
                </a>
                <div className="desc">
                  <h3>
                    <a href="#">Inspirational Website</a>
                  </h3>
                  <span>
                    <small>by Admin </small> / <small> Web Design </small> /
                    <small>
                      <i className="icon-comment"></i> 14
                    </small>
                  </span>
                  <p>
                    Design must be functional and functionality must be
                    translated into visual aesthetics
                  </p>
                  <a href="#" className="lead">
                    Read More <i className="icon-arrow-right3"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="get-in-touch">
          <div className="fh5co-narrow-content">
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <h1 className="fh5co-heading-colored">Get in touch</h1>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <p className="fh5co-lead">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyledMain>
    </StyledPageContainer>
  );
}
