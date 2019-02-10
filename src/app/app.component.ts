import { Component } from '@angular/core';
import{ Card }from './card'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards:Card[]=[]; //การประกาศtype คือ array ของ card -> เป็น type ว่างๆ

  get sorted():Card[]{
    console.log('access');
    return this.cards.sort((a,b) => b.votes - a.votes);


  }


  onclick(firstName:HTMLInputElement,lastName:HTMLInputElement){
    console.log(firstName.value,lastName.value);
    const card = new Card(firstName.value,lastName.value,0);  //const คือ การประกาศค่าที่เปลี่ยนแปลงไม่ได้ เพราะมีการ fix memories
    this.cards.push(card);  //นำค่าของ card ใส่ใน array
    console.log(this.cards);
    firstName.value = '';
    lastName.value = '';
   
    // alert('Hello')
  }
  
}
