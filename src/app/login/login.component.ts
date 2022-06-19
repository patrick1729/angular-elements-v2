import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class LoginComponent {

    public loginForm: FormGroup;

    @Input() submitColor: string = 'unset';
    @Output() formSubmitted: EventEmitter<{email: string, password: string}> = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: ['']
        });
    }

    loginUser(): void {
        this.formSubmitted.emit(this.loginForm.value);
    }

}
