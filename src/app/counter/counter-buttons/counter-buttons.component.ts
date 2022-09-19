import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import  * as CounterActions from '../state/counter.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  public ngOnInit(): void {
  }

  public increment(): void {
    this.store.dispatch(CounterActions.increment());
  }

  public decrement(): void {
    this.store.dispatch(CounterActions.decrement());
  }

  public reset(): void {
    this.store.dispatch(CounterActions.reset());
  }

  public pow(): void {
    this.store.dispatch(CounterActions.pow({n: 2}));
  }

  public sqrt(): void {
    this.store.dispatch(CounterActions.sqrt());
  }

}
