import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DataService } from 'src/app/@core/services/data.service';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
      ],
      providers: [DataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title element', () => {
    let title = fixture.debugElement.query(By.css('.title'))
    expect(title).toBeTruthy();
  })

  it('should display Hero title', () => {
    const dts = TestBed.inject(DataService);
    dts.title$.next('Hero');
    fixture.detectChanges();
    let title = fixture.debugElement.query(By.css('.title'))
    expect(title.nativeElement.innerText).toBe('Hero');
  })
});
