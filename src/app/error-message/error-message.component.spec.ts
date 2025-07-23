import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessageComponent } from './error-message.component';
import { By } from '@angular/platform-browser';

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
    const title = fixture.debugElement.query(By.css("h2[data-testid='name-container']"))
    expect(title.nativeElement?.textContent).toContain('Murat');
  })

  it('should render custom error message', () => {
    const messageContainer = fixture.debugElement.query(By.css("h1[data-testid = 'message-container']"))
    component.message = 'Error message';
    fixture.detectChanges();
    expect(messageContainer?.nativeElement.textContent).toContain('Error message')
  });
});
