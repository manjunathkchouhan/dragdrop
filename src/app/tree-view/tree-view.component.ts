import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule, TreeViewModule],
  templateUrl: './tree-view.component.html',
  styleUrl: './tree-view.component.css',
})
export class TreeViewComponent {
  public treeViewData: Object[] = [
    {
      id: '01',
      name: 'Local Disk (C:)',
      subChild: [
        {
          id: '01-01',
          name: 'Program Files',
          subChild: [
            { id: '01-01-01', name: '7 zip' },
            { id: '01-02-03', name: 'Git' },
            { id: '01-03-22', name: 'Angular Projects' },
          ],
        },
        {
          id: '01-02',
          name: 'Users',
          subChild: [
            { id: '01-01-01', name: 'Manju' },
            { id: '01-02-03', name: 'Vinod' },
            { id: '01-03-22', name: 'xyz' },
          ],
        },
        { id: '01-03', name: 'Windows' },
      ],
    },
    {
      id: '02',
      name: 'Local Disk (D:)',
      subChild: [
        { id: '01-04', name: 'Photos' },
        { id: '01-05', name: 'Personal' },
        { id: '01-06', name: 'Abc' },
      ],
    },
    { id: '03', name: 'Local Disk (E:)' },
  ];
  public datasourceFields: Object = {
    dataSource: this.treeViewData,
    id: 'id',
    text: 'name',
    child: 'subChild',
  };
}
