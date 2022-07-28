import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Element } from 'src/app/interfaces/element';
import { ElementsService } from 'src/app/service/elements.service';


@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

 @Input() elements: Element[];
 @Output() search: EventEmitter<string>


 elemet: Element | undefined;


  constructor(private elementService: ElementsService, private activateRoute: ActivatedRoute) { 

    this.elements = new Array();
    this.search = new EventEmitter<string>();
  }

  ngOnInit(): void {
    
    this.arrElements = this.elementService.getElements();
  }


  arrElements: Element[] = new Array();

  onSearch($event: any): void { 
    
    this.arrElements = this.elementService.getElementsByName($event);
  }

}
