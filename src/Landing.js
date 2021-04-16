import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookGrid from './BookGrid';

class Landing extends Component {

  state = {
        books :[]
  }

  onShelfUpdate = () => {
    
    console.log('udpated!!');

    this.refreshBooks();
  }


  render() {


        const {books,onShelfUpdate} = this.props;

        return (
            <div className="list-books">
               <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <BookGrid 
                        books={books}
                        shelf="currentlyReading"
                        handleShelfUpdate = {onShelfUpdate}
                        />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <BookGrid 
                        books={books}
                        shelf="wantToRead"
                        handleShelfUpdate = {onShelfUpdate}
                        />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <BookGrid 
                        books={books}
                        shelf="read"
                        handleShelfUpdate = {onShelfUpdate}
                        />
                  </div>
                </div>
              </div>
            </div>
              <Link 
                to="search"
                className="open-search"
              >
                <button>Add a Book</button>   
              </Link>
          </div>
          )
        }
};

export default Landing;
