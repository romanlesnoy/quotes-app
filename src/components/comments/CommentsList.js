import React from "react";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
    return (
        <ul className={classes.comments}>
            {props.comments.map((comment) => (
                <CommentItem key={comment.id} text={comment.text} />
            ))}
        </ul>
    );
};

CommentsList.propTypes = {
    comments: PropTypes.array
};

export default CommentsList;
