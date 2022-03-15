import { Component, OnInit } from '@angular/core';

export enum gameState {
  launch = 'launch',
  play = 'play',
  results = 'results'
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  gameState: gameState;

  constructor() {
    this.gameState = gameState.launch;
   }

  ngOnInit(): void {
  }

}
