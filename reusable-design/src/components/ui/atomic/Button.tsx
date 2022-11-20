import {cva, VariantProps} from "class-variance-authority";
import styles from './Button.module.css';
import React from "react";

const buttonStyles = cva(styles.base, {
  variants: {
    intent: {
      primary: styles.primary,
      secondary: styles.secondary
    },
    size: {
      small: styles.small,
      medium: styles.medium,
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

type ButtonProps =
  React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export default function Button({intent , size, children, ...props}: ButtonProps) {


  return (
    <button className={ buttonStyles({intent, size})} {...props}>
      {children}
    </button>
  )

}