import { AutoCompleteComponent } from './dynamic-form/components/auto-complete/auto-complete.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/components/dynamic-form/dynamic-form.component';
//MATERIAL
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { PortalModule } from '@angular/cdk/portal';
import { MatCommonModule, MatRippleModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioButton } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule, MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionPanel } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material';
import {MatTreeFlattener, MatTreeFlatDataSource, MatTreeModule} from '@angular/material/tree';
import { FormHolderComponent } from './dynamic-form/form-holder/form-holder.component';
import { InputComponent } from './dynamic-form/components/input/input.component';
import { DynamicFieldDirective } from './dynamic-form/components/dynamic-field/dynamic-field.directive';
import { TextAreaComponent } from './dynamic-form/components/text-area/text-area.component';
import { SelectComponent } from './dynamic-form/components/select/select.component';
import { ButtonComponent } from './dynamic-form/components/button/button.component';
import { DateComponent } from './dynamic-form/components/date/date.component';
import { ComponentComponent } from './component/component.component';
//END MATERIAL

const appRouter:Routes = [
  { path: 'form', component: FormHolderComponent},
  { path: 'comp', component: ComponentComponent},
   { path: '**', redirectTo: 'form' }

];
const MATERIAL_MODULES = [
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCommonModule,
  ObserversModule,
  OverlayModule,
  PortalModule,
  BidiModule,
  A11yModule,
  MatTreeModule,
  MatExpansionModule
];


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    FormHolderComponent,
    InputComponent,
    DynamicFieldDirective,
    TextAreaComponent,
    SelectComponent,
    ButtonComponent,
    DateComponent,
    AutoCompleteComponent,
    ComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    HttpModule,
    HttpClientModule,
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    TextAreaComponent,
    SelectComponent,
    ButtonComponent,
    DateComponent,
    AutoCompleteComponent,
    /* 
    RadiobuttonComponent,
    CheckboxComponent, */
    DynamicFormComponent
  ]

})
export class AppModule { }
