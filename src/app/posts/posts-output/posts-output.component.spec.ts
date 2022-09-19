import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsOutputComponent } from './posts-output.component';

describe('PostsOutputComponent', () => {
  let component: PostsOutputComponent;
  let fixture: ComponentFixture<PostsOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
