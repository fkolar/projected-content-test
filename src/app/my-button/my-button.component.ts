import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {
  @Input()
  value = 'test';
  times = 1;


  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }


  onEvent(): void {
    this.value = 'xxx' + this.times++;
    console.log('sdfasdf')
    this.cd.detectChanges();
  }
}
