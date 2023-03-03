import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  bookForm: Books = {
    id: 0,
    title: '',
    description: '',
    available: false,
  };

  constructor(private bookService:BooksService, private router:Router) { }

  ngOnInit(): void {}

  create() {
    this.bookService.create(this.bookForm)
      .subscribe({
        next:(data) => {
          this.router.navigate(["/books/list"])
        },
        error:(err) => {
          console.log(err);
        }
      })
  }
}
