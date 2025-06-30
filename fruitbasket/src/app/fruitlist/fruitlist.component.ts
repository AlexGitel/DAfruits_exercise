import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingelfruitComponent } from './singelfruit/singelfruit.component';
import { FruitlistGlobalService } from '../fruitlist-global.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SingelfruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistGlobal = inject(FruitlistGlobalService);


  addComment(comment: string, index: number) {
    this.fruitlistGlobal.fruitlist[index].reviews.push({
      name: "Author",
      text: comment
    })
  }
}
