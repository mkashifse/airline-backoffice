export namespace AppActions {

    export class Login {
        static readonly type = '[App] Login';
        constructor(public payload: { email: string, password: string }) { }
    }

}
