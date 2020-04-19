import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { withStyles, Typography } from "@material-ui/core"
// @material-ui/icons
// core components
import Header from "components/Header/Header.js"
import Footer from "components/Footer/Footer.js"
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import Parallax from "components/Parallax/Parallax.js"
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js"

import styles from "assets/jss/material-kit-react/views/components.js"

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          brand="Competitive Pokémon Tutorial"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/pikachu_main.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>
                    Competitive Breeding for Beginners
                  </h1>
                  <h3 className={classes.subtitle}>
                    The guide for creating your own competitive battle team for the competitive scene.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
          <Typography variant="h2" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px", }}>Hello There!</Typography>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(styles)(Components)
