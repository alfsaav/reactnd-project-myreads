import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp'

export default class BookGrid extends Component {


    static propTypes = {
      books: PropTypes.array.isRequired,
      shelf: PropTypes.string,
      handleShelfUpdate: PropTypes.func,
      myBooks: PropTypes.array,
    }

    render(){
        
        const {books, shelf, myBooks, handleShelfUpdate} = this.props;

        //I've used escape-string-regexp and approach from ContactsList application from previous examples
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
                                 handleUpdate = {handleShelfUpdate}
                                 myBooks={myBooks}
                            />
                        </li>
                    
                )}
                )}
          </ol>
        )
    }

}