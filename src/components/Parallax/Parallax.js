import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// @material-ui/core components
import { withStyles } from "@material-ui/core"

// core components
import styles from "assets/jss/material-kit-react/components/parallaxStyle.js"

class Parallax extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transform: "translate3d(0," + (window.innerWidth >= 768 ? window.pageYOffset / 2 : 0) + "px,0)"
    }
  }

  resetTransform = () => {
    this.setState({
      transform: "translate3d(0," + (window.pageYOffset / 2) + "px,0)"
    })
  }

  componentDidMount() {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", this.resetTransform)
    }
  }

  componentWillUnmount() {
    if (window.innerWidth >= 768) {
      window.removeEventListener("scroll", this.resetTransform)
    }
  }

  render() {
    const { classes, filter, className, children, style, image, small } = this.props
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined
    })

    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: "url(" + image + ")",
          transform: this.state.transform
        }}
      >
        {children}
      </div>
    )
  }
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool
}

export default withStyles(styles)(Parallax)