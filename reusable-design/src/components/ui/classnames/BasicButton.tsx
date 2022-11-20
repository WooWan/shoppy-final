import React from "react";
import classNames from "classnames";
import styles from './Button.module.scss';
import PropTypes from "prop-types";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  intent: "primary" | "basic" | "danger";
  size: "small" | "medium";
  children: React.ReactNode
};

export default function BasicButton({intent ="basic", size = "medium", children, ...props}: ButtonProps) {

  return (
    <button className={classNames(
      styles.base,
      {
        [styles.primary]: intent === "primary",
        [styles.basic]: intent === "basic",
        [styles.danger]: intent === "danger",
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
      })}
            {...props}
    >
      {children}
    </button>
  );
}

BasicButton.propTypes = {
  intent: PropTypes.oneOf(["primary", "basic", "danger"]),
  size: PropTypes.oneOf(["small", "medium"]),
}
