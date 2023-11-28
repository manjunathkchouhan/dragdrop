import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { UmlDaigramComponent } from './uml-daigram/UmlDaigramComponent';
import { UmlComponent } from './uml/uml.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TreeViewComponent,
    UmlDaigramComponent,
    UmlComponent,
    DragDropComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'syncfusion-tree-view';
}
