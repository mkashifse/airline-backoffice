export namespace AppActions {

    export class LoadLocalToken {
        static readonly type = '[App] Load local token';
    }

    export class Login {
        static readonly type = '[App] Login';
        constructor(public payload: { email: string, password: string }) { }
    }

    export class PostAmeduesSettings {
        static readonly type = '[App] Post amedues settings';
        constructor(public payload: any) { }

    }
    export class GetAmeduesSettings {
        static readonly type = '[App] Get amedues settings';
    }

}
