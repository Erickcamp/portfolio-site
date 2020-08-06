import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  mainComponent: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}))

const Nav = () => {
  const classes = useStyles()
  return (
    <div className={classes.mainComponent}>
      <div>Home</div>
      <div>About</div>
      <div>Skills</div>
      <div>Projects</div>
      <div>Contact</div>
    </div>
  )
}

export default Nav
