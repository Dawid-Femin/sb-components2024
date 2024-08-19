import { FC, ReactNode } from "react";
import classes from "./banner.module.scss";
import { CustomButton } from "../CustomButton";

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
        <CustomButton size={"fullWidth"} color={"primary"}>
          {buttonContent}
        </CustomButton>
      </div>
      <div className={classes.image}></div>
    </div>
  );
};
