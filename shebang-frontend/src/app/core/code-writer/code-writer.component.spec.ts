import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeWriterComponent } from './code-writer.component';

describe('CodeWriterComponent', () => {
  let component: CodeWriterComponent;
  let fixture: ComponentFixture<CodeWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeWriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
