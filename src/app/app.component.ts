import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public word: string;
  searchForm;

  constructor(
    private formBuilder: FormBuilder,
  ){
    this.searchForm = this.formBuilder.group({
      search: "",
    });
  }

  ngOnInit() {
    this.word = null;
  }

  onSubmit(object) {
    this.word = object.search;
    this.searchForm.reset();
  }
}
