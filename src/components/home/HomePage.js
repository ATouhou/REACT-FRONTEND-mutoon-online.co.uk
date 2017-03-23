import React, {PropTypes}  from 'react';

import SelectMenu from '../common/selectMenu/SelectMenu';
import SliderContainer from './sliderContainer/SliderContainer';
import LoadingSpinner from '../common/loadingSpinner/LoadingSpinner';
import SelectMenusContainer from './selectMenusContainer/SelectMenusContainer';
import AudioPlayer from './audioPlayer/AudioPlayer';
import AudioButtons from './audioButtons/AudioButtons';
import Swiper from '../../../node_modules/swiper/dist/js/swiper';
import '../../../node_modules/swiper/dist/css/swiper.css';
import * as constants from '../Constants';
import "whatwg-fetch";

import '../../../vendor/bootstrap-material-design/material';
import '../../../vendor/bootstrap-material-design/ripples';

//Language Import
import LocalizedStrings from 'react-localization';
import LanguageStrings from '../common/Language/Language.js';
var ls = LanguageStrings.data;
ls = new LocalizedStrings(ls);
//End Language Import




let savedSelectedBookDataUnsortedFromAjax,
    selectedPage;

let swiper;

let audioPlayer;

let hashValue;

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bookCategories: [],
            selectedBookDataUnsortedFromAjax: savedSelectedBookDataUnsortedFromAjax == null ? [] : savedSelectedBookDataUnsortedFromAjax,
            bookSelectMenuValue: "",
            selectedBookObject: {},
            selectedPage: selectedPage == null ? 0 : selectedPage
        };

        this.fetchBookCategoryData = this.fetchBookCategoryData.bind(this);
        this.changeHandlerBookSelectMenu = this.changeHandlerBookSelectMenu.bind(this);
        this.changeHandlerPageSelectMenu = this.changeHandlerPageSelectMenu.bind(this);
        this.clickHandlerPlayBtn = this.clickHandlerPlayBtn.bind(this);
        this.renderCategoryOptions = this.renderCategoryOptions.bind(this);
        this.renderPageOptions = this.renderPageOptions.bind(this);
        this.getSelectedBookObject = this.getSelectedBookObject.bind(this);
        this.viewFadeIn = this.viewFadeIn.bind(this);
        this.viewFadeOut = this.viewFadeOut.bind(this);
        this.clickHandlerChangePlaybackSpeed = this.clickHandlerChangePlaybackSpeed.bind(this);

    }


    /*##################################################################################################################
     ####################################################################################################################
     ########################################### LIFECYCLE METHODS ######################################################
     ####################################################################################################################
     ##################################################################################################################*/

    componentWillMount() {
        this.setState({
            selectedBookDataUnsortedFromAjax: savedSelectedBookDataUnsortedFromAjax == null ? [] : savedSelectedBookDataUnsortedFromAjax,
            selectedPage: selectedPage == null ? 0 : selectedPage
        });
    }

    componentDidMount() {

        $.material.init();
        $.material.ripples();
        $.material.input();

        this.fetchBookCategoryData();
        this.viewFadeIn();
    }

    componentDidUpdate() {
        audioPlayer = $('audio')[0];
        if (audioPlayer != undefined || audioPlayer != null) {
            audioPlayer.pause();
            $("#play-icon").html("play_arrow");
            $("#speed").html("normal");
        }
        window.location.hash = hashValue == undefined ? "" : hashValue + "-" + this.state.selectedPage;
        this.viewFadeIn();

    }

    componentWillUnmount() {
        savedSelectedBookDataUnsortedFromAjax = this.state.selectedBookDataUnsortedFromAjax;
        selectedPage = this.state.selectedPage;
    }


    /*##################################################################################################################
     ###################################################################################################################
     ########################################### FUNCTIONS #############################################################
     ###################################################################################################################
     #################################################################################################################*/


    //-- Ajax calls
    fetchBookCategoryData() {
        fetch(constants.urlCategories)
            .then(response => response.json())
            .then(data => {
                this.setState({bookCategories: data});
                $(function () {
                    $(".select-menus-container").css("opacity", 1);
                });
            })
            .catch(err => console.error(constants.urlCategories, err.toString()));
    }

    fetchBookData(bookSlug) {
        fetch(constants.urlBook + bookSlug)
            .then(response => response.json())
            .then(data => {
                    this.setState({
                        selectedBookDataUnsortedFromAjax: data,
                        selectedPage: 0
                    });
                    const thisComponent = this;

                    if (swiper != undefined) {
                        swiper.slideTo(0, 0);
                        swiper.destroy();

                    }

                    //Init Swiper
                    swiper = new Swiper('.swiper-container', {
                            nextButton: '.swiper-button-next',
                            prevButton: '.swiper-button-prev',
                            pagination: '.swiper-pagination',
                            paginationType: 'progress',
                            autoHeight: true,
                            centeredSlides: true,
                            spaceBetween: 50,
                            grabCursor: true,
                            keyboardControl: true,


                            'onInit': function () {
                                $("#pageList").val(0);
                                thisComponent.setState({selectedPage: 0});

                            },
                            'onSlideChangeEnd': function () {
                                selectedPage = swiper.activeIndex;
                                thisComponent.setState({selectedPage: selectedPage});
                                $("#pageList").val(selectedPage);

                            }
                        }
                    );

                }
            )
            .catch(err => {
                console.error(constants.urlCategories, err.toString());
            });
    }

    clickHandlerPlayBtn() {

        $(function () {

            let audioPlayer = $('audio')[0];

            if (audioPlayer.readyState < 4) {
                $(".loading-spinner").addClass("fixed").fadeIn(100);
            }

            audioPlayer.addEventListener('playing', function () {
                $(".loading-spinner").removeClass("fixed").hide();

            }, false);

            if (audioPlayer.duration > 0 && !audioPlayer.paused) {
                audioPlayer.pause();
                $("#play-icon").html("play_arrow");
            } else {
                audioPlayer.play();
                $("#play-icon").html("pause");
            }

            audioPlayer.addEventListener('ended', function () {
                audioPlayer.currentTime = 0;

                //repeat Audio
                setTimeout(function () {
                    audioPlayer.play();
                }, 200);

            }, false);
        });

    }

    changeHandlerBookSelectMenu(event) {

        $(function () {

            // $(".playBtn").fadeOut();
            let audioPlayer = $('audio')[0];
            if (audioPlayer != null) {
                {
                    if (!audioPlayer.paused)
                        audioPlayer.pause();
                    $("#play-icon").html("play_arrow");
                }
            }
        });

        this.fetchBookData(event.target.value);
        hashValue = event.target.value;
        this.viewFadeOut();
        $('select').blur();


    }

    changeHandlerPageSelectMenu(event) {
        //this.setState({selectedPage: event.target.value});
        swiper.slideTo(Number.parseInt(event.target.value), 1500);
        $('select').blur();
    }

    clickHandlerChangePlaybackSpeed() {
        if (audioPlayer.playbackRate == 1) {
            $("#speed").html("1/2");
            audioPlayer.playbackRate = 0.5;
        } else {
            $("#speed").html("Normal");
            audioPlayer.playbackRate = 1;
        }

    }


    renderCategoryOptions() {
        const renderCategoryOptions = this.state.bookCategories.map(function (category, i) {
            if (category.name_english != "Unassigned") {
                return (
                    <option value={category.bookid} key={i}>
                        {category.name_english} - {category.name_arabic}
                    </option>
                );
            }
        });
        return renderCategoryOptions;
    }

    renderPageOptions() {
        const renderPageOptions = this.state.selectedBookDataUnsortedFromAjax.map(function (page, i) {
            return (
                i == 0 ?
                    <option value={i} key={i}>
                        {ls.Intro}
                    </option>
                    :
                    <option value={i} key={i}>
                        {ls.Page} {i}
                    </option>

            );
        });
        return renderPageOptions;
    }

    getSelectedBookObject() {

        let selectedBookObject = {};

        this.state.selectedBookDataUnsortedFromAjax.map(function (selectedBook, i) {

            try {

                let audioUrl;

                if (selectedBook.page_number == 0) {
                    audioUrl = "empty";
                } else {
                    //audioUrl = selectedBook.acf.audio.url;
                //constants.urlAudio
                audioUrl = 'https://touhou.dk/muttoon/recitation_files/1/al-waajibaat-al-mutahattimat-part1.mp3';
                }

                selectedBookObject["part_" + selectedBook.page_number] = {
                    part: selectedBook.page_number,
                    arabic: selectedBook.content_arabic,
                    english: selectedBook.content_english,
                    audioUrl: audioUrl
                };

            } catch (err) {
                console.error(err);
            }

        });

        return selectedBookObject;
    }

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

        const renderCategoryOptions = this.renderCategoryOptions();
        const renderPageOptions = this.renderPageOptions();
        const selectedBookObject = this.getSelectedBookObject();

        return (

            <div>
                <div className="container">

                    <LoadingSpinner/>

                    <div className="inner-container">

                        <SelectMenusContainer
                            onChangeBookSelectMenu={this.changeHandlerBookSelectMenu}
                            onChangePageSelectMenu={this.changeHandlerPageSelectMenu}
                            selectedBookObject={selectedBookObject}
                            renderCategoryOptions={renderCategoryOptions}
                            renderPageOptions={renderPageOptions}
                        />

                        <AudioPlayer
                            selectedBookObject={selectedBookObject}
                            selectedPage={this.state.selectedPage}
                        />

                    </div>
                </div>

                <SliderContainer selectedBookObject={selectedBookObject}/>

                <AudioButtons
                    selectedPage={this.state.selectedPage}
                    selectedBookObject={selectedBookObject}
                    onClickPlayBtn={this.clickHandlerPlayBtn}
                    onClickChangePlaybackSpeed={this.clickHandlerChangePlaybackSpeed}

                />
            </div>
        );
    }
}


export default HomePage;
