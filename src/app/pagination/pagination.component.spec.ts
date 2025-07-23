import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { first } from 'rxjs';
import { By } from '@angular/platform-browser';
import {UtilsService} from "../utils.service";

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  let mockUtilsServer= {
    range: () => [1, 2, 3, 4, 5]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent],
      providers: [{provide: UtilsService, useValue: mockUtilsServer}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;

    component.total = 50;
    component.limit = 10;
    component.currentPage = 1; //we are adding these here so we get the ng on init calculations.
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be 5 page containers', () => {
    const pageContainers = fixture.debugElement.queryAll(By.css("[data-testid='page-container']"))

    expect(pageContainers.length).toBe(5);
    expect(pageContainers.at(0)?.nativeElement.textContent).toContain('1');
  });

  it('should emit a clicked page', () => {
    const pageContainers = fixture.debugElement.queryAll(By.css("[data-testid='page-container']"));

    let clickedPage: number | undefined;

    component.pageChangeEvent.pipe(first()).subscribe(page => {
      clickedPage = page;
    });
    pageContainers.at(0)?.triggerEventHandler('click');
    expect(clickedPage).toBe(1);
  });

});
