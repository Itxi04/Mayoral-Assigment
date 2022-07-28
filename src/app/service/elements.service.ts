import { Injectable } from '@angular/core';
import { Element } from '../interfaces/element';
import{ ELEMENT } from '../db/elements.db';


@Injectable({
  providedIn: 'root'
})
export class ElementsService {
    
   private arrElements: Element[];
   priceFilter: any;

  constructor() { 

    this.arrElements = ELEMENT; 

  
  }

  getElements(): Element[] {
    return this.arrElements;
  }

  getElementsByName(pName: any): Element [] {
    return this.arrElements.filter(Element => Element.name.toLowerCase().includes(pName.toLowerCase()));
  }
}
