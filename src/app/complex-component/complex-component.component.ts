import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-complex-component',
  templateUrl: './complex-component.component.html',
  styleUrls: ['./complex-component.component.css']
})
export class ComplexComponentComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data) => {
      this.data = data;
    });

  }

}
