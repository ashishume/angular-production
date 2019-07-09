import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatInputModule,
	MatButtonModule,
	MatMenuModule,
	MatStepperModule,
	MatTabsModule,
	MatToolbarModule,
	MatSidenavModule,
	MatAutocompleteModule,
	MatIconModule,
	MatListModule,
	MatGridListModule,
	MatDialogModule,
	MatSelectModule,
	MatExpansionModule,
	MatCardModule,
	MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatDialogModule,
		MatExpansionModule,
		CommonModule,
		MatTabsModule,
		MatAutocompleteModule,
		MatMenuModule,
		MatInputModule,
		MatStepperModule,
		MatButtonModule,
		MatSelectModule,
		MatToolbarModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		
	],
	exports: [
		MatButtonModule,
		MatTabsModule,
		MatAutocompleteModule,
		MatMenuModule,
		MatExpansionModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatToolbarModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatCardModule,
		MatStepperModule,
		MatInputModule,
		MatDialogModule
	]
})
export class AppMaterialModule {}
