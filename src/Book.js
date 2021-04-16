import React, { Component } from 'react';
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'



export default class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        handleUpdate: PropTypes.func,
        myBooks: PropTypes.array,

      }


    state = {

        current_shelf : ''
    }

    options = [
                { value: 'move', label: 'Move to...'},
                { value: 'currentlyReading', label: 'Currently Reading'},
                { value: 'wantToRead', label: 'Want to Read'},
                { value: 'read', label: 'Read'},
                { value: 'none', label: 'None'}
              ]

    handleChange = shelf => {

        const {book} = this.props;

        var that  = this;

        BooksAPI.update(book, shelf ).then(resp => {
            
            console.log(resp);

            if(that.props.handleUpdate){
                that.props.handleUpdate();    
            }
            

        }, error => {
            console.log('Error from API');
        });

        this.setState(()=>({current_shelf: shelf}));

       
     }


    render(){

        const {book:thisBook, myBooks} = this.props;

        let bookInLib;

        if(myBooks){

            //Check if this book already exists in local library
            bookInLib = myBooks.find( book => book.title === thisBook.title);
        }

        let book;
        if(bookInLib){
            book = bookInLib;
        }else{
            book = thisBook;
        }

        let defaultVal;

        if(book.shelf === 'currentlyReading' || book.shelf === 'wantToRead' ||  book.shelf === 'read' ){
            defaultVal = book.shelf
        }else{
            defaultVal = 'none';
        }

        return (
            <article  className="book">
                <div className="book-top">
                {book.imageLinks && 

                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url( ${book.imageLinks.thumbnail})` }}></div>
                
                }
                <div className="book-shelf-changer">
                    <select value={this.state.shelf} onChange={ e => this.handleChange(e.target.value) } defaultValue={defaultVal} >
                    {this.options.map( (option, index) => {
                            return( <option key={index} value={option.value} disabled={'disabled' in option} >{option.label}</option>)
                        })}
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{ book.authors && book.authors[0]}</div>
            </article>
        )
    }

}