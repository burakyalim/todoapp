import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() listdata: any[]=[];

 delete(index: number) {
  this.listdata.splice(index, 1);
}

}

