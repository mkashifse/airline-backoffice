export namespace AppActions {

    export class Login {
        static readonly type = '[App] Login';
        constructor(public payload: { email: string, password: string }) { }
    }

    export class PostAmeduesSettings {
        static readonly type = '[App] Post amedues settings';
        constructor(public payload: { email: string, password: string }) { }

    }

}
