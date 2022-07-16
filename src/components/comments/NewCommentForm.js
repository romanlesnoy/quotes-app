import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import LoadingSpinner from "../UI/LoadingSpinner";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
    const commentTextRef = useRef();

    const { sendRequest, status, error } = useHttp(addComment);

    const { onAddedComment, quoteId } = props;

    useEffect(() => {
        if (status === "completed" && !error) {
            onAddedComment();
        }
    }, [status, error, onAddedComment]);

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredtext = commentTextRef.current.value;

        sendRequest({
            commentData: { text: enteredtext },
            quoteId: quoteId
        });
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === "pending" && (
                <div className="centered">
                    <LoadingSpinner />
                </div>
            )}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor="comment">Your Comment</label>
                <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className="btn">Add Comment</button>
            </div>
        </form>
    );
};

NewCommentForm.propTypes = {
    onAddedComment: PropTypes.func.isRequired,
    quoteId: PropTypes.string.isRequired
};

export default NewCommentForm;
