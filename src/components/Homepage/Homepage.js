import React from 'react';
import ArrowRight20 from '@carbon/icons-react/es/arrow--right/20';
import { Link } from 'gatsby';

export class HomepageHeader extends React.Component {
  componentDidMount() {
    document.title = 'IBM Design Research';
  }

  render() {
    // Banner image
    const bannerImg = (
      <svg
        width="994"
        height="986"
        viewBox="0 0 994 986"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <ellipse id="path-1" cx="496" cy="492" rx="496" ry="492" />
          <mask id="mask-2" x="0" y="0" width="992" height="984" fill="#fff">
            <use xlinkHref="#path-1" />
          </mask>
        </defs>
        <g id="Pulse" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(1 1)">
            <ellipse
              id="Oval-10"
              fill="#FFA0C2"
              opacity="0.2"
              cx="493.5"
              cy="493"
              rx="267.5"
              ry="265"
            />
            <path
              d="M494.5,788 C658.804713,788 792,655.700144 792,492.5 C792,329.299856 658.804713,197 494.5,197 C330.195287,197 197,329.299856 197,492.5 C197,655.700144 330.195287,788 494.5,788 Z"
              id="Oval-10"
              stroke="#FF767C"
              strokeWidth="2"
              strokeDasharray="2,10"
            />
            <ellipse
              id="Oval-10"
              fill="#FA75A6"
              opacity="0.5"
              cx="494.5"
              cy="494"
              rx="213.5"
              ry="212"
            />
            <ellipse
              id="Oval-10"
              fill="#EE538B"
              cx="493.5"
              cy="495"
              rx="150.5"
              ry="150"
            />
            <path
              d="M495,866 C703.211351,866 872,698.778354 872,492.5 C872,286.221646 703.211351,119 495,119 C286.788649,119 118,286.221646 118,492.5 C118,698.778354 286.788649,866 495,866 Z"
              id="Oval-10"
              stroke="#EE538B"
              strokeWidth="2"
              strokeDasharray="2,10"
            />
            <use
              id="Oval-10"
              stroke="#EE538B"
              mask="url(#mask-2)"
              strokeWidth="4"
              opacity="0.6"
              strokeDasharray="2,10"
              xlinkHref="#path-1"
            />
            <path
              d="M494.5,846 C691.389513,846 851,687.956517 851,493 C851,298.043483 691.389513,140 494.5,140 C297.610487,140 138,298.043483 138,493 C138,687.956517 297.610487,846 494.5,846 Z"
              id="Oval-10-Copy"
              stroke="#EE538B"
              strokeWidth="2"
              opacity="0.2"
              strokeDasharray="2,10"
            />
          </g>
        </g>
      </svg>
    );

    const homeTitle = (
      <div className="homepage--header__wrapper">
        <h1 className="homepage--header__title">
          <span>We are not our users.</span>
        </h1>
        <p className="homepage--header__subtitle">
          An authentic focus on people begins with this recognition.
        </p>
      </div>
    );

    return (
      <div>
        <section className="homepage--header">
          <div className="ibm--grid">
            <div className="ibm--row ">
              <div className="ibm--col-sm-4 ibm--col-md-4 ibm--col-lg-5 ibm--offset-lg-4">
                {homeTitle}
              </div>
              <div className="banner-svg ibm--col-sm-4 ibm--col-md-2 ibm--col-lg-4 ibm--offset-lg-1">
                {bannerImg}
              </div>
            </div>
          </div>
        </section>
        <section className="homepage--callout">
          <div className="ibm--grid">
            <div className="ibm--row">
              <aside
                aria-label="header callout"
                className="ibm--col-md-8 ibm--col-lg-4 ibm--offset-lg-4 homepage--callout-header">
                <h3>
                  What is Design
                  <br />
                  Research?
                </h3>
              </aside>
              <div
                className="ibm--col-lg-8 ibm--col-md-5"
                style={{ paddingBottom: `10rem` }}>
                <p
                  className="bx--type-expressive-paragraph-01"
                  style={{ marginBottom: `3rem` }}>
                  Design research is at the heart of Enterprise Design Thinking.
                  If you're not practicing design research, you're not working
                  in the Loop. Design research helps teams uncover insights and
                  inform the experiences we create for people.
                </p>

                <p className="bx--type-expressive-paragraph-01">
                  It turns out good design really is good business. Learn more
                  about the business impact of Enterprise Design Thinking in
                  this{' '}
                  <a
                    className="forrester-link"
                    href="https://www.ibm.com/design/thinking/static/media/Enterprise-Design-Thinking-Report.8ab1e9e1.pdf"
                    alt="Forrester report">
                    Forrester report
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export class HomepageTileNav extends React.Component {
  render() {
    return (
      <div className="homepage--callout--tiles">
        <div className="ibm--grid">
          <section className="ibm--row ibm--no-gutter">
            <div class="ibm--col-sm-4 ibm--col-md-4 ibm--col-lg-4 ibm--offset-lg-4">
              <Link to="/guiding-principles/principles-overview">
                <div class="ibm--aspect-ratio bx--aspect-ratio--1x1 homepage--tile-border">
                  <div class="ibm--aspect-ratio--object homepage--tile-padding">
                    <div class="outside homepage--tile-height">
                      <div class="inside homepage--tile-wrapper">
                        <p className="bx--type-productive-heading-07">
                          Guiding
                          <br /> principles
                        </p>
                        <div className="homepage--tile-subheader-wrapper">
                          <span className="homepage--tile-subheader-text bx--type-body-short-02">
                            A foundation for great experiences{' '}
                          </span>
                          <span>
                            <ArrowRight20 aria-label="read more" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div class="ibm--col-sm-4 ibm--col-md-4 ibm--col-lg-4">
              <Link to="/research-in-practice/practice-overview">
                <div class="ibm--aspect-ratio bx--aspect-ratio--1x1 homepage--tile-border">
                  <div class="ibm--aspect-ratio--object homepage--tile-padding">
                    <div class="outside homepage--tile-height">
                      <div class="inside homepage--tile-wrapper">
                        <p className="bx--type-productive-heading-07">
                          Research in
                          <br /> practice
                        </p>
                        <div className="homepage--tile-subheader-wrapper">
                          <span className="homepage--tile-subheader-text bx--type-body-short-02">
                            Establish a shared vocabulary{' '}
                          </span>
                          <span>
                            <ArrowRight20 aria-label="read more" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div class="ibm--col-sm-4 ibm--col-md-4 ibm--col-lg-4">
              <Link to="/ethics">
                <div class="ibm--aspect-ratio bx--aspect-ratio--1x1 homepage--tile-border">
                  <div class="ibm--aspect-ratio--object homepage--tile-padding">
                    <div class="outside homepage--tile-height">
                      <div class="inside homepage--tile-wrapper">
                        <p className="bx--type-productive-heading-07">
                          Ethics &amp;
                          <br /> responsibilities
                        </p>
                        <div className="homepage--tile-subheader-wrapper">
                          <span className="homepage--tile-subheader-text bx--type-body-short-02">
                            The design research code of conduct{' '}
                          </span>
                          <span>
                            <ArrowRight20 aria-label="read more" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export class HomepageWhyDoIt extends React.Component {
  render() {
    return (
      <section className="homepage--callout-gray10">
        <div className="ibm--grid">
          <div className="ibm--row">
            <aside
              aria-label="header callout"
              className="ibm--col-md-5 ibm--col-lg-4 ibm--offset-lg-4">
              <h3>Why do it?</h3>
            </aside>
            <div
              className="ibm--col-lg-8 ibm--col-md-5"
              style={{ marginBottom: `2rem` }}>
              <p className="bx--type-expressive-paragraph-01">
                The practice of design research incorporates a rigorous study of
                people and the ecosystems in which they exist. Through the
                practice, teams continuously build understanding and empathy
                through empirical observation, experience, and making.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export class HomePageBottomNav extends React.Component {
  render() {
    return (
      <div className="next-previous-wrapper">
        <div className="ibm--grid">
          <div className="ibm--row next-previous-controls">
            <a className="ibm--col-lg-6 ibm--col-md-4 ibm--col-sm-2 ibm--offset-lg-4" />
            <a
              href="guiding-principles/principles-overview"
              className="next-previous-link next-previous-link--next ibm--col-lg-6 ibm--col-md-4 ibm--col-sm-2">
              <span className="target-page-direction">Next</span>
              <span className="target-page-name">Principles overview</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
