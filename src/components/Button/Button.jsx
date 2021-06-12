import React from "react";
import cx from "clsx";
import "./Button.scss";

export function Button({ className, ...props }) {
  return <button className={cx(className, "btn")} type="button" {...props} />;
}
