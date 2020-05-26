import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAssignmentPage } from './view-assignment.page';

describe('ViewAssignmentPage', () => {
  let component: ViewAssignmentPage;
  let fixture: ComponentFixture<ViewAssignmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssignmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAssignmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
