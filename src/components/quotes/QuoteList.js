import React, { Fragment } from "react";
import PropTypes from "prop-types";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const QuoteList = (props) => {
    return (
        <Fragment>
            <ul className={classes.list}>
                {props.quotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

QuoteList.propTypes = {
    quotes: PropTypes.array.isRequired
};

export default QuoteList;
