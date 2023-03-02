import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  bookForm: Books = {
    id: 0,
    title: '',
    description: '',
    available: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private booksService: BooksService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.booksService.getById(id).subscribe((data) => {
      this.bookForm = data;
    });
  }
 
  update() {
    this.booksService.update(this.bookForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/books/list"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
