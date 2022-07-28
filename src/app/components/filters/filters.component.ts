import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ElementsService } from 'src/app/service/elements.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
   
  price: number = 0;
  @Output() search: EventEmitter<string>
  @Output() priceFilter: EventEmitter<number>



  constructor(private elementsService: ElementsService){ 

    this.search = new EventEmitter();
    this.priceFilter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  collectDataSearch($event: any) {
    
    this.search.emit($event.target.value);
    
  }


  ascendente(){

    this.elementsService.getElements().sort((a, b) => a.price - b.price);

  }

  descendente(){

    this.elementsService.getElements().sort((a, b) => b.price - a.price);

  }

}
