import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import withTheme from "../hoc/withTheme";
import PropTypes from "prop-types";

const Spinner = ({ theme }) => (
  <div className="Spinner">
    <Loader
      type="ThreeDots"
      color={theme.type === "dark" ? "#2196f3" : "#d87093"}
      height={50}
      width={50}
    />
  </div>
);

Spinner.propTypes = {
  theme: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default withTheme(Spinner);
