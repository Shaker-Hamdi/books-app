import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategoryBooks } from "../books/booksActions";
// import Loading from "../../layout/Loading";

class Category extends Component {
    componentDidMount() {
        this.props.getCategoryBooks(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getCategoryBooks(this.props.match.params.id);
        }
    }

    render() {
        const { categoryBooks } = this.props;
        return (
            <div>
                {/* <h1>{this.props.match.params.id}</h1> */}
                {categoryBooks &&
                    categoryBooks.map(book => {
                        return <div key={book.id}>{book.title}</div>;
                    })}
            </div>
        );
    }
}

const mapState = state => ({
    categories: state.categories.categories,
    categoryBooks: state.books.categoryBooks
});

const mapActions = {
    getCategoryBooks
};

export default connect(
    mapState,
    mapActions
)(Category);
