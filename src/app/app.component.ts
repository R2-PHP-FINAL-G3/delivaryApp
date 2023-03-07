import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dilevary';
  boolDesplayed: boolean=false;
  ngOnInit():void{
    if(localStorage.getItem('data')==null){
      this.boolDesplayed=false;
    }else{
      this.boolDesplayed=true;
    }
  }
}
