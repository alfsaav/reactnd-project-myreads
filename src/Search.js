import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'


//var my_timer = null;

class Search extends Component { 
     

      state = {
        query:'',
        newBooks: [],
        timer: null,
      }

      my_timer = null

  
      useSearch = (query) => {


      this.setState(()=> (
          {
            query: query.trim()
          }))
       
      }

      componentDidUpdate(_prevProps, prevState){
            

        clearTimeout(this.my_timer);

        const {query} = this.state;


        if( query !== prevState.query && query !== ''){
            
          this.my_timer = setTimeout(function(){
            
                  BooksAPI.search(query).then(newBooks => {
                          
                        if(newBooks.hasOwnProperty('error')){
                          this.setState({newBooks: []});
                          console.log(newBooks.error);
                        }else{
                           // update Books state
                          this.setState({newBooks});
                        };
                        
                       
                      
                        }, error => {
                          
                          this.setState({newBooks: []});
                        });
                  

            }.bind(this), 1000); 

        }     
                
          
                
          
      }
  
      render(){

        const { newBooks } = this.state;
        
        return(
        <div className="search-books">
            <div className="search-books-bar">
              {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
              <Link 
                to="/"
                className="close-search"
              >
                Close  
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  onChange={(event)=> this.useSearch(event.target.value)}
                 // value={query}  
                  />

              </div>
            </div>
            <div className="search-books-results">
                  
                  { newBooks && 
                  <BookGrid 
                        books={newBooks}
                  />
                  }
            </div>
          </div>
        )}
}


export default Search;