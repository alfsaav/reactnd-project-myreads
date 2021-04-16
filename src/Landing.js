import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid';

class Landing extends Component {

  state = {
        books :[]
  }

  componentDidMount() {

    this.refreshBooks();

  }

  refreshBooks(){
    
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  onShelfUpdate = () => {
    
    console.log('udpated!!');

    this.refreshBooks();
  }


  render() {


        const {books} = this.state;

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
                        handleShelfUpdate = {this.onShelfUpdate}
                        />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                  <BookGrid 
                        books={books}
                        shelf="wantToRead"
                        handleShelfUpdate = {this.onShelfUpdate}
                        />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <BookGrid 
                        books={books}
                        shelf="read"
                        handleShelfUpdate = {this.onShelfUpdate}
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
