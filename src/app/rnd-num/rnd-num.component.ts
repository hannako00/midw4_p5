import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-nums',
  templateUrl: './rnd-num.component.html',
  styleUrls: ['./rnd-num.component.css']
})
export class RndNumComponent{

  constructor() {
    for (var x=0; x<6; x++){
      this.rndNumber.push(Math.floor(Math.random()*46)+1)
    }
  }

  rndNumber:any = []
  selected:any

  buttonSelect(num: number){
    this.selected = num
  }
}
