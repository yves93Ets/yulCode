import React from 'react';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import FlareIcon from '@material-ui/icons/Flare';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import CastIcon from '@material-ui/icons/Cast';
import EmailIcon from '@material-ui/icons/Email';
import NavigationIcon from '@material-ui/icons/Navigation';

import '../styles/Carrousel.scss';

export default class MenuComponent extends React.Component {
  componentDidMount() {
    var carousel = document.querySelector('.carousel');
    var cellCount = 9;
    var selectedIndex = 0;

    function rotateCarousel() {
      var angle = (selectedIndex / cellCount) * -360;
      carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
    }

    var prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener('click', function() {
      selectedIndex++;
      rotateCarousel();
    });

    var nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', function() {
      selectedIndex++;
      rotateCarousel();
    });
  }

  render() {
    return (
      <div style={positionStyle}>
        <div className="scene">
          <div className="carousel">
            <div className="carousel__cell">
              <Fab
                color="secondary"
                aria-label="edit"
                style={buttonStyle}
                className="carousel__cell"
              >
                <EditIcon />
              </Fab>
            </div>
            <div className="carousel__cell">
              <Fab
                color="primary"
                aria-label="edit"
                style={buttonStyle}
                className="carousel__cell"
              >
                <FlareIcon />
              </Fab>
            </div>
            <div className="carousel__cell">
              <Fab
                aria-label="edit"
                style={buttonStyle}
                className="carousel__cell"
              >
                <VolumeUpIcon />
              </Fab>
            </div>
            <div className="carousel__cell">
              <Fab
                color="secondary"
                aria-label="edit"
                style={buttonStyle}
                className="carousel__cell"
              >
                <ScreenShareIcon />
              </Fab>
            </div>
            <div className="carousel__cell">
              <Fab
                color="primary"
                aria-label="edit"
                style={buttonStyle}
                className="carousel__cell"
              >
                <CastIcon />
              </Fab>
            </div>
            <div className="carousel__cell">
              <Fab
                aria-label="edit"
                style={buttonStyle}
                className="carousel__cell"
              >
                <EmailIcon />
              </Fab>
            </div>
            <div className="carousel__cell">
              <Fab
                color="secondary"
                aria-label="edit"
                style={buttonStyle}
                className="carousel__cell"
              >
                <EditIcon />
              </Fab>
            </div>
            <div className="carousel__cell">
              <Fab
                color="primary"
                aria-label="edit"
                style={buttonStyle}
                className="carousel__cell"
              >
                <FlareIcon />
              </Fab>
            </div>
            <div className="carousel__cell">
              <Fab
                aria-label="edit"
                style={buttonStyle}
                className="carousel__cell"
              >
                <VolumeUpIcon />
              </Fab>
            </div>
          </div>
        </div>
        <p style={pStyle}>
          <Fab variant="extended" className="previous-button" aria-label="like">
            <NavigationIcon />
            Previous
          </Fab>
          <Fab variant="extended" className="next-button" aria-label="like">
            <NavigationIcon />
            Next
          </Fab>
        </p>
      </div>
    );
  }
}
const buttonStyle = {
  color: '#282c34',
};
const pStyle = { textAlign: 'center' };

const positionStyle = { position: 'absolute', left: '200px' };
