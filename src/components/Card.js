import React from "react";
import PropTypes from "prop-types";

function Button({label, border = "1px solid black", size = "md", handleClick}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    border,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  };
  return <div style={style}>{label}</div>;
}

Button.propTypes = {
  label: PropTypes.string,
  border: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};
export default Button;

const CardWrapper = styled.div;
