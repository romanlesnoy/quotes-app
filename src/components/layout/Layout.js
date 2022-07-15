import React, { Fragment } from "react";
import PropTypes from "prop-types";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation />
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout;
