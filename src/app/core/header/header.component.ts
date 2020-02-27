import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<boolean>();
  constructor( ) { }

  ngOnInit() {
  }

  handleClick() {
    this.toggle.emit();
  }

  changeDark(check: boolean) {
    this.toggleTheme.emit(check);
  }

}
