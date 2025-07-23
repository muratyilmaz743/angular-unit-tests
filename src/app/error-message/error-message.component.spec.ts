import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("h2[data-testid='name-container']")?.textContent).toContain('Murat');
  })

  it('should render custom error message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    component.message = 'Error message';
    fixture.detectChanges();
    expect(compiled.querySelector("h1[data-testid = 'message-container']")?.textContent).toContain('Error message')
  });
});
