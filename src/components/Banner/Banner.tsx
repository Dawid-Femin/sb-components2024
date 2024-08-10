import { FC, ReactNode } from "react";
import classes from "./banner.module.scss";
import { Button } from "../Button";

interface BannerProps {
  title: string;
  description: string;
  buttonContent: ReactNode;
}

export const Banner: FC<BannerProps> = ({
  title,
  description,
  buttonContent,
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button size={"fullWidth"} color={"primary"}>
          {buttonContent}
        </Button>
      </div>
      <div className={classes.image}></div>
    </div>
  );
};
