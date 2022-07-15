import React from "react";
import PropTypes from "prop-types";

import classes from "./QuoteItem.module.css";

const QuoteItem = (props) => {
    return (
        <li className={classes.item}>
            <figure>
                <blockquote>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
            </figure>
            <a href="?#" className="btn">
                View Fullscreen
            </a>
        </li>
    );
};

QuoteItem.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default QuoteItem;
