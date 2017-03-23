import React, {PropTypes}  from 'react';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';


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




    /*##################################################################################################################
     ###################################################################################################################
     ########################################### RENDER ################################################################
     ###################################################################################################################
     ##################################################################################################################*/


    render() {
        return (


                <div className="container about">

                    <LoadingSpinner/>

                    <div className="inner-container">

            <div>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            </div>

            </div>

        );
    }
}




export default AboutPage;