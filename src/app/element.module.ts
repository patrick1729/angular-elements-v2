import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';

import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        LoginModule,
        BrowserAnimationsModule
    ],
    providers: [],
})
export class ElementModule implements DoBootstrap {

    constructor(
        private injector: Injector
    ) {}

    ngDoBootstrap(appRef: ApplicationRef) {
        if (!customElements.get('login-provider')) {
            // Register only if 'login-provider' entry is not found in the registry

            // Step 3: loginComponent stores the constructor class
            const loginComponent = createCustomElement(LoginComponent, {
                injector: this.injector,    // This injector is used to load the component's factory
            });

            // Step 4: Registering custom tag 'login-provider' with the obtained custom class
            customElements.define('login-provider', loginComponent);
        }
    }
}
