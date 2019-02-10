import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card:Card;  //typy ของ card มันคือ type ของ class Cards
  constructor() { }

  ngOnInit() {
  }

  upvote(){
    // this.card.votes = this.card.votes + 1;
    this.card.votes++;
  }
  downvote(){
    // this.card.votes = this.card.votes - 1;
    this.card.votes--;
  }

}
