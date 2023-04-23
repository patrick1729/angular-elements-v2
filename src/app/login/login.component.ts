import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../../styles.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class LoginComponent {
    public loginForm: FormGroup;

    @Input() submitColor: string = 'unset';
    @Output() formSubmitted: EventEmitter<{ email: string; password: string }> =
        new EventEmitter();

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }

    loginUser(): void {
        this.formSubmitted.emit(this.loginForm.value);
    }
}
