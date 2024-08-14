import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductVegetableComponent } from './product-vegetable/product-vegetable.component';
import { ProductVegetablePowderComponent } from './product-vegetable-powder/product-vegetable-powder.component';
import { ProductEssentialOilComponent } from './product-essential-oil/product-essential-oil.component';

export const routes: Routes = [
    {
        path: '', component: LandingComponent, pathMatch: 'full'
    },
    {
        path: 'vegetable', component: ProductVegetableComponent
    },
    {
        path: 'vegetable-powder', component: ProductVegetablePowderComponent
    },
    {
        path: 'essential-oil', component: ProductEssentialOilComponent
    }
];
