import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule,TitleCasePipe,RouterModule, BreadcrumbComponent, BreadcrumbItemDirective],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {

  constructor(public bcService: BreadcrumbService) {}

}