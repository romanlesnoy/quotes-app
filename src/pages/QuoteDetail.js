import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
    const params = useParams();
    return (
        <section>
            <h1>QuoteDetail</h1>
            <p>{params.quoteId}</p>
        </section>
    );
};

export default QuoteDetail;
