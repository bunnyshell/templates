import { Component, OnInit } from '@angular/core';
import { Books } from '../books';
import { BooksService } from '../books.service';

declare var window: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allBooks: Books[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }

  get() {
    this.booksService.get().subscribe((data) => {
      this.allBooks = data;
    });
  }

  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.booksService.remove(this.idTodelete).subscribe({
      next: (data) => {
        this.get();
        this.deleteModal.hide();
      },
    });
  }
}
