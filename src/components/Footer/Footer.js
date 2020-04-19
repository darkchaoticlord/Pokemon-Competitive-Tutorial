/*eslint-disable*/
import React from "react"
import classNames from "classnames"
// material-ui core components
import { withStyles, List, ListItem } from "@material-ui/core"

// @material-ui/icons
import { Favorite } from "@material-ui/icons"

import styles from "assets/jss/material-kit-react/components/footerStyle.js"

class Footer extends React.Component {
  render() {
    const { classes, whiteFont } = this.props
    return (
      <footer className={classNames({ [classes.footer]: true, [classes.footerWhiteFont]: whiteFont })}>
        <div className={classes.container}>

          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.pokemon.com/uk/pokedex/"
                  className={classes.block}
                  target="_blank"
                >
                  Jawad Adnan
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.pokemon.com/uk/pokedex/"
                  className={classes.block}
                  target="_blank"
                >
                  Peter Spiers
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.pokemon.com/uk/pokedex/"
                  className={classes.block}
                  target="_blank"
                >
                  Blog
                </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                <a
                  href="https://www.pokemon.com/uk/pokedex/"
                  className={classes.block}
                  target="_blank"
                >
                  Licenses
                </a>
              </ListItem>
            </List>
          </div>

          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            <a
              href="https://www.pokemon.com/uk/pokedex/"
              className={classNames({ [classes.a]: true, [classes.footerWhiteFont]: whiteFont })}
              target="_blank"
            >
              Jawad Adnan
            </a>{" "}
            to teach Peter in building a website.
          </div>

        </div>
      </footer>
    )
  }
}

export default withStyles(styles)(Footer)