import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';

class LazyImage extends React.Component {
  static defaultProps = {
    lazy: true,
    progressive: true,
  }

  constructor(props) {
    super(props);
    this.state = {
      image: props.progressive ? 
          props.placeholder ? 
            props.placeholder : '' : 
          props.src,
      isLoaded: false,
      isLoading: false,
    };
  }

  componentDidMount() {
    if (this.props.progressive && !this.props.lazy) {
      this.loadImage();
    }
  }
  
  componentWillUnmount() {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
    }
  }

  onLoad = () => {
    this.setState({
      image: this.image.src,
      isLoading: false,
      isLoaded: true,
    });
  };

  onError = (errorEvent) => {
    const { onError } = this.props;
    if (onError) {
      onError(errorEvent);
    }
    
    this.setState({
      isLoading: false,
      isLoaded: false,
    });
  };

  handleWaypointEnter = () => {
    if (this.props.progressive && this.props.lazy && !this.state.isLoading && !this.state.isLoaded) {
      this.loadImage();
      this.setState({
        isLoading: true,
      });
    }
  };

  loadImage = () => {
    if (this.image) {
      this.image.onload = null;
      this.image.onerror = null;
    }
    this.image = new Image();
    this.image.onload = this.onLoad;
    this.image.onerror = this.onError;

    this.image.src = this.props.src;
  };

  render() {
    const {
      image,
    } = this.state;

    const {
      src,
      lazy,
      progressive,
      ...other
    } = this.props;

    return (
      <Waypoint
        onEnter={this.handleWaypointEnter}
      >
        <img
          src={image}
          {...other}
        />
      </Waypoint>
    );
  }
}

LazyImage.propTypes = {
  lazy: PropTypes.bool,
  progressive: PropTypes.bool,
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default LazyImage;
