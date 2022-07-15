import React from "react";
import PropTypes from "prop-types";

import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
    return (
        <li className={classes.item}>
            <p>{props.text}</p>
        </li>
    );
};

CommentItem.propTypes = {
    text: PropTypes.string
};

export default CommentItem;
