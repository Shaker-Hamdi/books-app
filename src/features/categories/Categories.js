import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../layout/Loading";

class Categories extends Component {
    render() {
        const { categories } = this.props;

        let categoriesList;

        if (categories && categories.length !== 0) {
            categoriesList = categories.map(category => (
                <li key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </li>
            ));
        } else {
            categoriesList = <Loading />;
        }
        return (
            <div>
                <h2>Categories</h2>
                <ul>{categoriesList}</ul>
            </div>
        );
    }
}

const mapState = state => ({
    categories: state.categories.categories
});

export default connect(mapState)(Categories);
