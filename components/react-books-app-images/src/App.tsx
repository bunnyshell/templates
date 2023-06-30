import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BookAdd from "./components/book-add.component";
import Book from "./components/book.component";
import BookList from "./components/book-list.component";
import logo from '../src/assets/logo.png'

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <nav className="navbar navbar-expand navbar-dark">
          <div className="container">
                <div className="wrap">
                <div className="logo">
                  <Link to={"/books"} className="navbar-brand">
                    <img src={logo} className="logo" alt="Bunnyshell" />
                  </Link>
                </div>
                <div className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/books"} className="nav-link">
                      Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/books/add"} className="nav-link">
                      Add Book
                    </Link>
                  </li>
                </div>
            </div>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/books"]} component={BookList} />
            <Route exact path="/books/add" component={BookAdd} />
            <Route path="/books/:id" component={Book} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
