import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState, selectCounter } from 'src/app/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {

  public counterValue: Observable<number>;

  constructor(private store: Store<AppState>) { 
    this.counterValue = this.store.select(selectCounter);
  }

  ngOnInit(): void {

  }

}
