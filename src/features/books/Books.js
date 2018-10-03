import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../../layout/Loading";
import Pagination from "../../util/Pagination";

class Books extends Component {
    state = {
        pageOfItems: []
    };

    onChangePage = pageOfItems => {
        this.setState(() => ({
            pageOfItems: pageOfItems
        }));
    };

    render() {
        const { books } = this.props;
        const { pageOfItems } = this.state;

        let booksList;
        let pagination;

        if (books && books.length !== 0) {
            booksList = (
                <ul>
                    {pageOfItems.map(book => {
                        return <li key={book.id}>{book.title}</li>;
                    })}
                </ul>
            );

            pagination = (
                <Pagination items={books} onChangePage={this.onChangePage} />
            );
        } else {
            booksList = <Loading />;
            pagination = null;
        }

        return (
            <>
                {booksList}
                {pagination}
            </>
        );
    }
}

const mapState = state => ({
    books: state.books.books
});

export default connect(mapState)(Books);
