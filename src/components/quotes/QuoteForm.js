import React, { useRef } from "react";
import PropTypes from "prop-types";

import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
    const authorInputRef = useRef();
    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        // optional: Could validate here

        props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitFormHandler}>
                {props.isLoading && (
                    <div className={classes.loading}>
                        <LoadingSpinner />
                    </div>
                )}

                <div className={classes.control}>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" ref={authorInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="text">Text</label>
                    <textarea id="text" rows="5" ref={textInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button className="btn">Add Quote</button>
                </div>
            </form>
        </Card>
    );
};

QuoteForm.propTypes = {
    onAddQuote: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default QuoteForm;
