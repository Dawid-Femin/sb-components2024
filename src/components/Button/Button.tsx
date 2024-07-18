import React, { ReactNode, FC, CSSProperties } from "react";
import classNames from "classnames";
import classes from "./button.module.scss";

interface ButtonProps {
  children: ReactNode;
  style?: CSSProperties;
  bold?: boolean;
  size?: "small" | "medium" | "large" | "fullWidth";
  color?: "primary" | "secondary";
}

export const Button: FC<ButtonProps> = ({
  children,
  style,
  bold,
  size,
  color,
}) => {
  const buttonClass = classNames(classes.root, {
    [classes.bold]: bold,
    [classes.small]: size === "small",
    [classes.medium]: size === "medium",
    [classes.large]: size === "large",
    [classes.fullWidth]: size === "fullWidth",
    [classes.primary]: color === "primary",
    [classes.secondary]: color === "secondary",
  });

  return (
    <button className={buttonClass} style={style}>
      {children}
    </button>
  );
};
