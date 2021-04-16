import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp'

export default class BookGrid extends Component {


    static propTypes = {
      books: PropTypes.object.isRequired,
      shelf: PropTypes.string,
      handleShelfUpdate: PropTypes.func.isRequired
    }

    render(){
        
        const {books, shelf} = this.props;


        let showingBooks;
        if (shelf) {
          const match = new RegExp(escapeRegExp(shelf), '')
          showingBooks = books.filter((book) => match.test(book.shelf))
        } else {
          showingBooks = books
        }

     


        return (
            <ol className="books-grid">

                {showingBooks && showingBooks.map((book)=>{
                    

                    return(

                        <li key={book.id}>
                            <Book
                                 book={book}
                                 handleUpdate = { this.props.handleShelfUpdate}
                            />
                        </li>
                    
                )}
                )}
          </ol>
        )
    }

}