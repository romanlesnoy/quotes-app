import React, { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};

const QuoteList = (props) => {
    const history = useHistory();
    const location = useLocation();

    const queeryParams = new URLSearchParams(location.search);

    const isSortingAscending = queeryParams.get("sort") === "asc";

    const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

    const ChangeSortingHandler = () => {
        history.push({
            pathname: location.pathname,
            search: `?sort=${isSortingAscending ? "desc" : "asc"}`
        });
    };

    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={ChangeSortingHandler}>
                    Sorting {isSortingAscending ? "Discending" : "Ascending"}
                </button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => (
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
