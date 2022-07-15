import React from "react";
import PropTypes from "prop-types";

import classes from "./HighlightedQuote.module.css";

const HighlightedQuote = (props) => {
    return (
        <figure className={classes.quote}>
            <p>{props.text}</p>
            <figcaption>{props.author}</figcaption>
        </figure>
    );
};

HighlightedQuote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default HighlightedQuote;
