import { Component, ChangeEvent } from "react";
import BookDataService from "../services/book.service";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IBookData from '../types/book.type';
import nobooks from '../assets/nobooks.png';

type Props = {};

type State = {
  books: Array<IBookData>,
  currentBook: IBookData | null,
  currentIndex: number,
  searchTitle: string
};

export default class BookList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveBooks = this.retrieveBooks.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBook = this.setActiveBook.bind(this);
    this.removeAllBooks = this.removeAllBooks.bind(this);
    this.searchByTitle = this.searchByTitle.bind(this);

    this.state = {
      // books: [
      //   {id: 1,title: 'How to train 1', description: 'Hiccup aspires to follow his tribe\'s tradition of becoming a dragon slayer.', available: true}, 
      //   {id: 2,title: 'How to train 2', description: 'Usodas red novlas to follow his tribe', available: true}, 
      //   {id: 3,title: 'How to train 3', description: 'DesOpdes coma reto cription', available: true}
      // ],
      books: [],
      currentBook: null,
      currentIndex: 0,
      searchTitle: ''
    };
  }

  componentDidMount() {
    this.retrieveBooks();
  }

  onChangeSearchTitle(e: ChangeEvent<HTMLInputElement>) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveBooks() {
    BookDataService.getAll()
      .then((response: any) => {
        this.setState({
          books: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveBooks();
    this.setState({
      currentBook: null,
      currentIndex: -1
    });
  }

  setActiveBook(book: IBookData, index: number) {
    this.setState({
      currentBook: book,
      currentIndex: index
    });
  }

  removeAllBooks() {
    BookDataService.deleteAll()
      .then((response: any) => {
        console.log(response.data);
        toast.success("All books removed!");
        this.refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  searchByTitle() {
    this.setState({
      currentBook: null,
      currentIndex: -1
    });

    BookDataService.findByTitle(this.state.searchTitle)
      .then((response: any) => {
        this.setState({
          books: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, books, currentBook, currentIndex } = this.state;

    return (
      <div className="list row">
        {currentBook ? (<div className="col-md-12 mb-5">
            <div className="row books-row">
              <div className="col-3">
                <div className="cover"/>
              </div>
              <div className="col-9">
              <h4>Book</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentBook.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentBook.description}
              </div>
              <div>
                <label>
                  <strong>Availability:</strong>
                </label>{" "}
                {currentBook.available ? "Available" : "Lent"}
              </div>
              </div>
            </div>
        </div>
        ) : ( '' )}
        <div className="col-md-6">
          <h4>Book List</h4>
          </div>
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn search-btn btn-outline-secondary"
                type="button"
                onClick={this.searchByTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <ul className="list-group">
            {books.length > 0 ?
              books.map((book: IBookData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveBook(book, index)}
                  key={index}
                >
                  <div className="left">{book.title}</div>
                  <div className="right">
                    <Link
                    to={"/books/" + book.id}
                    className="badge badge-warning"
                  >
                    Edit
                  </Link>
                  </div>

                </li>
              )) : 
              <div className="nobooks-wrap">
                  <img src={nobooks} alt="No books" />
              </div>}
          </ul>
          <div className="buttons-wrap">
              <Link to={"/books/add"} className="btn btn-info add-book-link">
                    Add Book
              </Link>
              {books.length > 0 && <button
                className="m-3 btn btn-sm btn-danger"
                onClick={this.removeAllBooks}
              >
                Remove All Books
              </button>}
          </div>
        </div>
      </div>
    );
  }
}
