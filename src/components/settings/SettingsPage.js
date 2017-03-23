import React, {PropTypes}  from 'react';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';

//Language Import
import LocalizedStrings from 'react-localization';
import LanguageStrings from '../common/Language/Language.js';
var ls = LanguageStrings.data;
ls = new LocalizedStrings(ls);
//End Language Import
//
class AboutPage extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
   //         bookCategories: [],
     //       selectedBookDataUnsortedFromAjax: savedSelectedBookDataUnsortedFromAjax == null ? [] : savedSelectedBookDataUnsortedFromAjax,
      //      bookSelectMenuValue: "",
      //      selectedBookObject: {},
       //     selectedPage: selectedPage == null ? 0 : selectedPage
        };

       // this.fetchBookCategoryData = this.fetchBookCategoryData.bind(this);
       // this.changeHandlerBookSelectMenu = this.changeHandlerBookSelectMenu.bind(this);
       // this.changeHandlerPageSelectMenu = this.changeHandlerPageSelectMenu.bind(this);
       // this.clickHandlerPlayBtn = this.clickHandlerPlayBtn.bind(this);
       // this.renderCategoryOptions = this.renderCategoryOptions.bind(this);
       // this.renderPageOptions = this.renderPageOptions.bind(this);
       // this.getSelectedBookObject = this.getSelectedBookObject.bind(this);
        this.viewFadeIn = this.viewFadeIn.bind(this);
        this.viewFadeOut = this.viewFadeOut.bind(this);
        ls.setLanguage('da');
      //  this.clickHandlerChangePlaybackSpeed = this.clickHandlerChangePlaybackSpeed.bind(this);

    }

    /*##################################################################################################################
     ####################################################################################################################
     ########################################### LIFECYCLE METHODS ######################################################
     ####################################################################################################################
     ##################################################################################################################*/

    componentDidMount() {

        $.material.init();
        $.material.ripples();
        $.material.input();

      //  this.fetchBookCategoryData();
        this.viewFadeIn();
    }

    componentDidUpdate() {
        this.viewFadeIn();

    }


    /*##################################################################################################################
     ###################################################################################################################
     ########################################### FUNCTIONS #############################################################
     ###################################################################################################################
     #################################################################################################################*/

    viewFadeIn() {

        $(function () {
            setTimeout(function () {
                $(".loading-spinner ").fadeOut();
                $(".inner-container ").addClass("removeBlur");
                $(".swiper-container").fadeIn();
            }, 100);
        });
    }

    viewFadeOut() {

        $(function () {
            $(".inner-container ").removeClass("removeBlur");
            $(".loading-spinner ").fadeIn();
            $(".no-book-message").fadeOut();
        });
    }



 negativar() {
    console.log('negativar clicked');
    var percent = '100%';
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');

    var css = 'html {-webkit-filter: invert('+percent+');' +
        '-moz-filter: invert('+percent+');' +
        '-o-filter: invert('+percent+');' +
        '-ms-filter: invert('+percent+'); ' +
        'filter: invert('+percent+'); ';


  var N= navigator.appName, ua= navigator.userAgent, tem;
  var M= ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
  if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
  M= M? [M[1], M[2]]: [N, navigator.appVersion,'-?'];

    if (M[0] == 'Firefox') {
        css += 'filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'invert\'><feColorMatrix in=\'SourceGraphic\' type=\'matrix\' values=\'-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0\'/></filter></svg>#invert"); }';
    } else {
        css += ' } ';
    }

    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }






// LANGUAGE





  setLanguage(twoLetter, e) {
    e.preventDefault();
    ls.setLanguage(twoLetter);
    this.forceUpdate();
  }






    /*##################################################################################################################
     ###################################################################################################################
     ########################################### RENDER ################################################################
     ###################################################################################################################
     ##################################################################################################################*/


    render() {
    var currentLanguage = 'da';//convertLanguage(ls.getLanguage());

/*


/localization.js

//app.js
import React, { Component } from 'react';
import MainPage from './MainPage';
import { localization as _l, convertLanguage } from '../localization';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('.dropdown-button').dropdown();
  }
  setLanguage(twoLetter, e) {
    e.preventDefault();
    _l.setLanguage(twoLetter);
    this.forceUpdate();
  }
  render() {
    const currentLanguage = convertLanguage(_l.getLanguage());
    return (
      <div>
        <ul id='languageDropdown' className='dropdown-content'>
          {_l.getAvailableLanguages().map(item => convertLanguage(item)).map((item, i) =>
            <li key={i}>
              <a href='' onClick={this.setLanguage.bind(this, item.TwoLetter)}>
                {item.NativeName}
              </a>
            </li>
          )}
        </ul>
        <nav className='cyan'>
          <div className='nav-wrapper'>
            <a className='brand-logo' style={{ marginLeft: 16 }}>MyApp</a>
            <ul className='right hide-on-med-and-down'>
              <li>
                <a className='dropdown-button' href='' data-activates='languageDropdown'>
                  {currentLanguage.NativeName}
                  <i className='material-icons right'>arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container'>
          <MainPage />
        </div>
        <footer className='page-footer cyan'>
          <div className='footer-copyright'>
            <div className='container'>
              <span style={{ fontWeight: 'normal' }}>© 2017 MyApp</span>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}


 */
        return (



                <div className="container about">

                    <LoadingSpinner/>

                    <div className="inner-container">

            <div>
                <h1>About</h1>
                <p>{ls.SettingsContent}
                </p>
            <li onClick={this.negativar}>NightMode</li>
            <li onClick={this.setLanguage.bind(this, 'en')}>Engelsk</li>
            <li onClick={this.setLanguage.bind(this, 'da')}>Dansk</li>
            <li onClick={this.setLanguage.bind(this, 'ar')}>Arabisk</li>
            </div>

            </div>

            </div>



        );
    }
}




export default AboutPage;