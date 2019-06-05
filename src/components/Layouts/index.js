import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import Packages from '../../../package.json';
import GlobalSearch from '../GlobalSearch';
import LeftNav from '../LeftNav';
import favicon32 from '../../content/global/images/favicon-32.png';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import AppSwitcher20 from '@carbon/icons-react/es/app-switcher/20';
import Close20 from '@carbon/icons-react/es/close/20';
import {
  WebsiteFooter,
  WebsiteSwitcher,
  WebsiteCodeSnippet,
} from '@carbon/addons-website';

import PageTable from '../PageTable';

import { p, h1, h2, h3, h4, h5, ul, ol } from '../markdown/Markdown';

import timestamp from 'raw-loader!../../../build-timestamp';
import '../../styles/index.scss';

import { MDXProvider } from '@mdx-js/tag';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    isLeftNavOpen: false,
    isLeftNavFinal: false,
    isSearchOpen: false,
    isSwitcherOpen: false,
    isSwitcherFinal: false,
  };

  componentDidMount() {
    this.checkWidth();
    this.addSmoothScroll();
  }

  handleSearchClick = isSearchOpen => {
    this.setState(
      {
        [isSearchOpen]: !this.state.isSearchOpen,
      },
      this.handleSearchEventListener
    );
  };

  handleSearchEventListener = () => {
    if (this.state.isSearchOpen) {
      document.body.addEventListener('click', this.handleCloseSearchClick);
    } else {
      document.body.removeEventListener('click', this.handleCloseSearchClick);
    }
  };

  handleCloseSearchClick = evt => {
    console.log(evt.target);
    const className = evt.target.classList[0];
    console.log(className);
    const filters = [
      'bx--search',
      'bx--search-input',
      'bx--search-magnifier',
      'ds-dataset-1',
    ];
    if (filters.indexOf(className) === -1) {
      this.handleSearchClick('isSearchOpen');
    }
  };

  onToggleBtnClick = (
    clickedPanel,
    finalClickedPanel,
    closePanel,
    finalClosePanel
  ) => {
    if (this.state[clickedPanel]) {
      this.setState({
        [clickedPanel]: false,
      });
      setTimeout(() => {
        this.setState({
          [finalClickedPanel]: true,
        });
      }, 5);
    } else {
      this.setState({
        [finalClickedPanel]: false,
        [finalClosePanel]: true,
      });
      setTimeout(() => {
        this.setState({
          [clickedPanel]: true,
          [closePanel]: false,
        });
      }, 5);
    }
  };

  handleClose = evt => {
    let isTarget = false;
    // `<svg>` in IE11 does not have `.classList`
    if (
      evt.target.classList &&
      evt.target.classList.contains('main-nav-item__heading') &&
      evt.target.classList.contains('main-nav-item__list')
    ) {
      isTarget = true;
    }
    const isSmallerScreen = window.innerWidth < 1056 || screen.width < 1056;
    if (!isTarget && isSmallerScreen) {
      this.setState({
        isLeftNavOpen: false,
      });
    }
  };

  clickToClose = () => {
    this.setState({
      isLeftNavOpen: false,
    });
  };

  checkWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;

      if (width < 1056) {
        this.setState({
          isLeftNavOpen: false,
        });
      }

      document.addEventListener('keydown', evt => {
        if (evt.which === 27 && this.state.isLeftNavOpen) {
          this.setState({
            isLeftNavOpen: false,
          });
        }
      });
    }
  };

  addSmoothScroll = () => {
    const SmoothScroll = require('smooth-scroll');
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      offset: 87, // height of both header bars
      topOnEmptyHash: false,
      clip: true,
    });

    if (window.location.hash) {
      const hashElement = document.querySelector(window.location.hash);
      if (hashElement.offsetTop) {
        window.scrollTo(0, hashElement.offsetTop);
      } else {
        // IE fallback
        scroll.animateScroll(hashElement);
      }
    }
  };

  render() {
    const { children } = this.props;
    const version = Packages.dependencies['carbon-components'];
    const reactVersion = Packages.dependencies['carbon-components-react'];
    const currentYear = new Date().getFullYear();
    const lastUpdated = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(Number(timestamp)));
    const { isLeftNavOpen } = this.state;

    const is404 = children.key === null;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    'IBM Design Research helps teams uncover insights and inform the experiences we create for people. It is at the heart of Enterprise Design thinking.',
                },
                {
                  name: 'keywords',
                  content:
                    'IBM, design, research, design research, design thinking, human-centered design, interviewing, user research, interviews, user experience research, service design, ux research, design strategy, people, practice, observation, user interviews, anthropology',
                },
              ]}
              link={[
                {
                  rel: 'shortcut icon',
                  type: 'image/png',
                  href: `${favicon32}`,
                },
              ]}>
              <html lang="en" />
            </Helmet>
            <Header aria-label="Header" className="bx--header--website">
              <SkipToContent />
              <HeaderMenuButton
                className="bx--header__action--menu"
                aria-label="Open menu"
                onClick={() =>
                  this.onToggleBtnClick(
                    'isLeftNavOpen',
                    'isLeftNavFinal',
                    'isSwitcherOpen',
                    'isSwitcherFinal'
                  )
                }
                isActive={isLeftNavOpen}
              />

              <HeaderName prefix="" to="/" element={Link}>
                IBM&nbsp;<span>Design Research</span>
              </HeaderName>

              <HeaderGlobalBar>
                <HeaderGlobalAction
                  className="bx--header__action--switcher"
                  aria-label="Switch"
                  onClick={() =>
                    this.onToggleBtnClick(
                      'isSwitcherOpen',
                      'isSwitcherFinal',
                      'isLeftNavOpen',
                      'isLeftNavFinal'
                    )
                  }>
                  {this.state.isSwitcherOpen ? <Close20 /> : <AppSwitcher20 />}
                </HeaderGlobalAction>
              </HeaderGlobalBar>
            </Header>

            <WebsiteSwitcher
              isSwitcherFinal={this.state.isSwitcherFinal}
              isSwitcherOpen={this.state.isSwitcherOpen}
              links={[
                { href: 'https://www.ibm.com/design/', linkText: 'IBM Design' },
                {
                  href: 'https://www.ibm.com/design/language/',
                  linkText: 'IBM Design Language',
                },
                {
                  href: 'https://www.carbondesignsystem.com',
                  linkText: 'IBM Product Design',
                },
                {
                  href: 'https://www.ibm.com/standards/web/',
                  linkText: 'IBM Digital Design',
                },
                {
                  href: 'https://www.ibm.com/design/research/',
                  linkText: 'IBM Design Research',
                },
                {
                  href: 'https://www.ibm.com/design/thinking/',
                  linkText: 'Enterprise Design Thinking',
                },
                {
                  href: 'https://www.ibm.com/services/ibmix/',
                  linkText: 'IBM iX',
                },
              ]}
            />

            <LeftNav
              is404Page={is404}
              isLeftNavFinal={this.state.isLeftNavFinal}
              isLeftNavOpen={this.state.isLeftNavOpen}
              location={this.props.location}
              clickToClose={this.clickToClose}
            />

            <div className="container">
              <MDXProvider
                components={{
                  // Map HTML element tag to React component
                  p: p,
                  h1: h1,
                  h2: h2,
                  h3: h3,
                  h4: h4,
                  h5: h5,
                  ul: ul,
                  ol: ol,
                  pre: WebsiteCodeSnippet,
                  table: PageTable,
                }}>
                {children}
              </MDXProvider>
              <WebsiteFooter
                logoOffset={true}
                linksCol1={[
                  { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
                  {
                    href: 'https://www.ibm.com/legal',
                    linkText: 'Terms of Use',
                  },
                  { href: 'https://www.ibm.com', linkText: 'IBM.com' },
                ]}
                linksCol2={[
                  {
                    href: 'https://medium.com/enterprise-design-thinking',
                    linkText: 'Medium',
                  },
                  {
                    href: 'https://twitter.com/ibmdesign',
                    linkText: 'Twitter',
                  },
                ]}>
                <p>
                  Have questions? Email us at{' '}
                  <a href="mailto:designthinking@us.ibm.com">
                    designthinking@us.ibm.com
                  </a>
                </p>
                <p>
                  Last updated {lastUpdated}
                  <br />
                  Copyright © {currentYear} IBM
                </p>
              </WebsiteFooter>
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
