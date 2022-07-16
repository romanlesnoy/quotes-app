import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
    { id: "q1", author: "Max", text: "React is fun" },
    { id: "q2", author: "Max", text: "React is great" }
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote found</p>;
    }

    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author} />

            <Route exact path={match.path}>
                <div className="centered">
                    <Link to={`${match.url}/comments`} className="btn--flat">
                        Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </section>
    );
};

export default QuoteDetail;
