import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLoading]'
})
export class LoadingDirective implements OnInit {

  @Input() set loading (value: boolean) {
    this._loading = value;
    if (value) {
      this.elementRef.nativeElement.appendChild(this.loadingContainer)
    } else {
      this.loadingContainer.remove();
    }
  }

  @Input() size!: number;
  @Input() color: string = 'white';
  @Input() loadingContainerClass: string = '';

  private _loading = false;
  private loadingContainer: HTMLDivElement;

  constructor(
    private elementRef: ElementRef
  ) {
    this.loadingContainer = document.createElement('div');
    this.loadingContainer.classList.add('loading-container');
    this.elementRef.nativeElement.style.position = 'relative';
    this.elementRef.nativeElement.style.overflow = 'hidden';
  }

  ngOnInit(): void {
    this.loadingContainer.appendChild(this.createSpinner());
  
    if (this.loadingContainerClass.length) {
      this.loadingContainer.classList.add(...this.loadingContainerClass.split(' '));
    }
    if (this._loading) {
      this.elementRef.nativeElement.appendChild(this.loadingContainer)
    }
  }

  createSpinner(): HTMLDivElement {
    const spinner = document.createElement('div');
    const spinnerPart = document.createElement('div');

    spinner.classList.add('lds-ring');
    spinner.style.width = `${this.size + 4}px`;
    spinner.style.height = `${this.size + 4}px`;

    spinnerPart.style.width = `${this.size}px`;
    spinnerPart.style.height = `${this.size}px`;
    spinnerPart.style.border = `${this.size/10}px solid ${this.color}`;
    spinnerPart.style.margin = `${this.size/10}px`;
    spinnerPart.style.borderColor = `${this.color} transparent transparent transparent`;

    for(let i = 0; i < 4; i++) {
      spinner.appendChild(spinnerPart.cloneNode())
    }
    return spinner;
  }
}
