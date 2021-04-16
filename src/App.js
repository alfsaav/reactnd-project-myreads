import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Landing from './Landing';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

     myBooks: []

  }

  componentDidMount() {

    this.refreshBooks();

  }

  refreshBooks(){
    
    BooksAPI.getAll().then((myBooks) => {
      this.setState({ myBooks })
    })
  }

  doOnShelfUpdate = () => {
    
   this.refreshBooks();
  }

  render() {
   

    return (
      <div className="app">

             <Route exact path='/' render={() => (
                <Landing
                      books={this.state.myBooks}
                      onShelfUpdate={this.doOnShelfUpdate}
                />
              )}/>

              <Route path='/Search' render={() => (
                <Search
                      books={this.state.myBooks}
                      onShelfUpdate={this.doOnShelfUpdate}               
                />
              )}/>


      </div>
    )
  }
}

export default BooksApp
