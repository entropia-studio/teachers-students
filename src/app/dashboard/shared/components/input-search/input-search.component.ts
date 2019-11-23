import { Component, Output, EventEmitter, Input, OnChanges, ElementRef, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnChanges{

  searchTerm = new FormControl('');  

  @Input() 
  searchPlaceholder: string; 

  @Input() 
  hasChanged: boolean; 

  @Output() 
  searchTermTeacher = new EventEmitter();

  @ViewChild('searchBox') searchBox: ElementRef;

  ngOnChanges(){
    this.searchTerm.reset();
  }

  inputSearch(term: string){
    this.searchTermTeacher.emit(term);
  }

}
