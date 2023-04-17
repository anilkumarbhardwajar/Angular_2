import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent {
  title = 'Angular Practice';
  isTrue = false;
  array = [
    { id: 1, Department: "Admin", name: "Samarjit singh" },
    { id: 3, Department: "Computer Cell", name: "Gurmeet singh" },
    { id: 4, Department: ".Net", name: "Jaspreet Kaur" },
    { id: 5, Department: "DBA", name: "MD Zaid" }
  ];

  constructor() { }

  ngOnInit() {

  }
  updateItem(e: any, type: any) {
    if (e.target.checked) {
      this.array.push(type);

    }
    else {
      this.array.splice(-1);
      console.log(this.array);
    }
  }
}
