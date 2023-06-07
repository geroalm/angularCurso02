import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    console.log("OnInic de cardComponent");
      if(! this.gif) throw new Error("This property is required");
  }

  @Input()
  public gif!:Gif;
}
