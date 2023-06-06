import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IemcrudComponent } from './iemcrud.component';

describe('IemcrudComponent', () => {
  let component: IemcrudComponent;
  let fixture: ComponentFixture<IemcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IemcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IemcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
