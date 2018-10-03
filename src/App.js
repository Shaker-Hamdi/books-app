import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import "./App.scss";
import Books from "./features/books/Books";
import Header from "./features/header/Header";
import NotFound from "./layout/NotFound";
import Categories from "./features/categories/Categories";
import Category from "./features/categories/Category";

import { asyncLoadCategories } from "./features/categories/categoriesActions";
import { asyncLoadBooks } from "./features/books/booksActions";

class App extends Component {
    async componentDidMount() {
        try {
            await this.props.asyncLoadBooks();
            await this.props.asyncLoadCategories();
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <Header />
                <div className="global-wrapper">
                    <div className="container">
                        <aside className="side-bar">
                            <Categories />
                        </aside>

                        <main className="main-content">
                            <Switch>
                                <Route exact path="/" component={Books} />
                                <Route
                                    path="/category/:id"
                                    component={Category}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </main>
                    </div>
                </div>
            </>
        );
    }
}

const mapActions = {
    asyncLoadBooks,
    asyncLoadCategories
};

export default compose(
    withRouter,
    connect(
        null,
        mapActions
    )
)(App);
