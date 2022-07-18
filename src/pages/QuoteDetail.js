import React, { useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
    const params = useParams();

    const { quoteId } = params;

    const {
        sendRequest,
        status,
        data: loadedQuote,
        error
    } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === "pending") {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="centered focused">{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p className="centered focused">No quote found!</p>;
    }

    return (
        <section>
            <HighlightedQuote
                text={loadedQuote.text}
                author={loadedQuote.author}
            />

            <div className="centered">
                <Link to="comments" className="btn--flat">
                    Load Comments
                </Link>
            </div>

            <Outlet />
        </section>
    );
};

export default QuoteDetail;
