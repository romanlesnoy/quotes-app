import React from "react";
import { Route, Redirect, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/">
                    <Redirect to="/quotes" />
                </Route>
                <Route path="/quotes" element={<AllQuotes />} />
                <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
                <Route path="/new-quote" element={<NewQuote />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    );
}

export default App;
