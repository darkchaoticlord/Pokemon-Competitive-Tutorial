/*eslint-disable*/
import React from "react"

// @material-ui/core components
import { 
  withStyles, 
  List, 
  ListItem, 
  Tooltip, 
  Typography 
} from "@material-ui/core"

// @material-ui/icons
import { Apps, CollectionsBookmark } from "@material-ui/icons"

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js"
import Button from "components/CustomButtons/Button.js"

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js"

class HeaderLinks extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Sections"
            buttonProps={{ className: classes.navLink, color: "transparent" }}
            buttonIcon={Apps}
            dropdownList={[
              <Typography variant="p" className={classes.dropdownLink}>
                Step 1
              </Typography>,
              <Typography variant="p" className={classes.dropdownLink}>
                Step 2
              </Typography>
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href="https://www.pokemon.com/uk/pokedex/"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <CollectionsBookmark className={classes.icons} /> Pokédex
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://www.pokemon.com/uk/pokedex/"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-twitter"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.pokemon.com/uk/pokedex/"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-facebook"} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-tooltip"
            title="Follow us on instagram"
            placement={window.innerWidth > 959 ? "top" : "left"}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.pokemon.com/uk/pokedex/"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    )
  }
}

export default withStyles(styles)(HeaderLinks)