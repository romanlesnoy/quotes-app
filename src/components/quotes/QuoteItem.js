import React from "react";
import { Link } from "react-router-dom";
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
            <Link to={`quotes/${props.id}`} className="btn">
                View Fullscreen
            </Link>
        </li>
    );
};

QuoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default QuoteItem;
