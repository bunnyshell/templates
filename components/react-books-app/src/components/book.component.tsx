import { Component, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import BookDataService from "../services/book.service";
import IBookData from "../types/book.type";

interface RouterProps {
  id: string;
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentBook: IBookData;
  message: string;
}

export default class Book extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getBook = this.getBook.bind(this);
    this.updateAvailable = this.updateAvailable.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    this.state = {
      currentBook: {
        id: null,
        title: "",
        description: "",
        available: false,
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getBook(this.props.match.params.id);
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentBook: {
        ...prevState.currentBook,
        description: description,
      },
    }));
  }

  getBook(id: string) {
    BookDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentBook: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updateAvailable(status: boolean) {
    const data: IBookData = {
      id: this.state.currentBook.id,
      title: this.state.currentBook.title,
      description: this.state.currentBook.description,
      available: status,
    };

    BookDataService.update(data, this.state.currentBook.id)
      .then((response: any) => {
        this.setState((prevState) => ({
          currentBook: {
            ...prevState.currentBook,
            available: status,
          },
        }));
        this.props.history.push("/books");
        toast.success(`The availability was updated successfully`);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updateBook() {
    BookDataService.update(
      this.state.currentBook,
      this.state.currentBook.id
    )
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          message: "The Book was updated successfully",
        });

        this.props.history.push("/books");
        toast.success(`The Book was updated successfully`);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  deleteBook() {
    BookDataService.delete(this.state.currentBook.id)
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          message: "The Book was deleted successfully",
        });
        
        this.props.history.push("/books");
        toast.success(`The Book was deleted successfully`);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { currentBook } = this.state;

    return (
      <div>
        {currentBook ? (
          <div className="edit-form">
            <h4>Book</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentBook.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentBook.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Availability:</strong>
                </label>
                {currentBook.available ? "Available" : "Lent"}
              </div>
            </form>
            <div className="edit-btn-wrap">
            <button
                type="submit"
                className="badge badge-success mr-2"
                onClick={this.updateBook}
              >
                Update
              </button>
              <button
                className="badge badge-danger mr-2"
                onClick={this.deleteBook}
              >
                Delete
              </button>
              {currentBook.available ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateAvailable(false)}
              >
                Lend book
              </button>
            ) : (
              <button
                className="badge badge-primary"
                onClick={() => this.updateAvailable(true)}
              >
                Return in library
              </button>
            )}
            </div>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Click on a Book to see details</p>
          </div>
        )}
      </div>
    );
  }
}
