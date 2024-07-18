import React from "react";
import classes from "./banner.module.scss";
import { Button } from "../Button";

export const Banner = () => {
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <h2>
          Want a custom website tailored to your needs?
          <br /> Let's talk
        </h2>
        <p>We have helped hundreds of founders with their website needs. </p>
        <Button size={"fullWidth"} color={"primary"}>
          See more
        </Button>
      </div>
      <div className={classes.image}></div>
    </div>
  );
};
