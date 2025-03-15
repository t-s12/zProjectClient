import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CountriesComponent } from './countries/countries.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CitiesComponent } from './cities/cities.component';
import { CountryPopulationComponent } from './country-population/country-population.component';

export const routes: Routes = [
    {path: "weather", component: WeatherComponent},
    {path: "navbar", component: NavBarComponent},
    {path: "countries", component: CountriesComponent},
    {path: "CountryPopulation/:id", component: CountryPopulationComponent},
    {path: "cities", component: CitiesComponent},
    {path: "", component: WeatherComponent, pathMatch: "full"},
];

 
