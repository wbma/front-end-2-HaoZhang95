import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData = 'hello';
  public baseURL = 'http://media.mw.metropolia.fi/wbma/';
  public mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/';
  public list;

  constructor(public http: HttpClient) { }

  getJSON() {
    interface ItemResponse {
      license: string;
    }
    this.http.get<ItemResponse>('assets/package.json').subscribe(data => {
      console.log(data.license);
      this.someData = data.license;
    });
  }

  getMedia() {
    const api = 'media';
    this.http.get(this.baseURL + api).subscribe( (data) => {
      this.list = data;
      console.log(this.list);
    });
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

}
