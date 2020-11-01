import { Component, OnInit } from '@angular/core';
import { BookModel } from './models/book.model';
import { MainService } from './services/main.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public mainBookList: Array<BookModel>;
  public displayBookList: Array<BookModel>;

  constructor(
    private mainService: MainService
  ) {
    this.mainBookList = new Array<BookModel>();
    this.displayBookList = new Array<BookModel>();
  }

  ngOnInit(): void {
    this.GetBooks();
  }

  public GetBooks() {
    this.mainService.GetBooks().subscribe(response => {
      this.mainBookList = response as Array<BookModel>;
      this.displayBookList = this.mainBookList;
    });
  }

  public search(event) {
    let text = event.target.value;

    if (text.length > 2) {
      this.displayBookList = this.mainBookList.filter(x => x.name.toLowerCase().includes(text.toLowerCase()) || x.author.toLowerCase().includes(text.toLowerCase()));
    }
    else {
      this.displayBookList = this.mainBookList;
    }
  }

}
