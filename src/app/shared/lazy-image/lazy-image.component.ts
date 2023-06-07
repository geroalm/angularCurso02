import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  public hasloaded: boolean = false;

@Input()
public url!: string;

@Input()
public alt: string = "";
  
ngOnInit(): void {
  if (!this.url) throw new Error('URL Property is required')
}

onLoad(){
  setTimeout(() => {
    this.hasloaded = true;
  }, 1500 );
 
}
}
