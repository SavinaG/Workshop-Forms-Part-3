import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'user',
        canActivateChild: [
            AuthGuard
        ], 
        children: [
            {
                path: 'register',
                component: RegisterComponent,
                data: {
                    isLogged: false,
                    noNavigation: true,
                    title: 'USER REGISTER'
                }
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    isLogged: false,
                    title: 'USER LOGIN'
                }
            },
            {
                path: 'profile',
                component: ProfileComponent,
                data: {
                    isLogged: true,
                    title: 'USER PRIFILE'
                }
            }
        ]
    }
]

export const UserRoutingModule = RouterModule.forChild(routes);