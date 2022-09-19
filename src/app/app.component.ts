import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tutorial-ngrx';

  constructor(private firebaseStore: AngularFirestore) {}

  public ngOnInit(): void {
    this.firebaseStore.collection('people').valueChanges().subscribe(
      d => console.log('people: ', d)
    )
  }
}
