import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeListComponent } from '../theme/theme-list/theme-list.component';
import { ThemeListItemComponent } from './theme-list-item/theme-list-item.component';
import { ThemeService } from './theme.service';
import { DetailComponent } from './detail/detail.component';
import { ThemeComponent } from './theme/theme.component';
import { ThemeRouterModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewComponent } from './new/new.component';
import { PostModule } from '../post/post.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ThemeListComponent,
    ThemeListItemComponent,
    DetailComponent,
    ThemeComponent,
    NewComponent,
  ],
  providers: [
    ThemeService
  ],
  imports: [
    CommonModule,
    ThemeRouterModule,
    SharedModule,
    PostModule,
    FormsModule
  ],
  exports: [
    ThemeListComponent,
    ThemeListItemComponent,
  ]
})
export class ThemeModule { }
