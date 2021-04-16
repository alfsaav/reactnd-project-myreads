import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
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

  }

  
    //Get list of Cats .. source of truth lives in App
    //pass list_cats to Landing as props
    //In Landing loop through arrays
    //Add Callback hook in Search on.... Callback lives in Book, this is inherit to book
 
  render() {
   return (
      <div className="app">

             <Route exact path='/' render={() => (
                <Landing
                
                />
              )}/>

              <Route path='/Search' render={() => (
                <Search
               
                />
              )}/>


      </div>
    )
  }
}

export default BooksApp
