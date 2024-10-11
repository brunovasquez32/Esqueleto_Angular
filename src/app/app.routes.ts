import { Routes } from '@angular/router';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistrateComponent } from './componentes/registrate/registrate.component';

export const routes: Routes = [
    {
        path:"contactanos",
        component:ContactoComponent
    },

    {
        path:"inicio",
        component:InicioComponent
    },
    
    {
        path:"registro",
        component:RegistrateComponent
    },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
]
