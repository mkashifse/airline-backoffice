import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { AppStateModel } from './app.state.model';
import { AppActions } from './app.actions';
import { AppService } from './app.service';
import { tap } from 'rxjs/operators';
import { Navigate } from '@ngxs/router-plugin';


@State<AppStateModel>({
    name: 'app',
    defaults: new AppStateModel(),
})
export class AppState {

    constructor(
        private service: AppService,
    ) {

    }

    @Selector()
    static isAuth(state: AppStateModel): boolean {
        const token = window.localStorage.getItem('token');
        return token ? true : false;
    }

    @Selector()
    static token(state: AppStateModel): string {
        const token = window.localStorage.getItem('token');
        return token;
    }

    @Action(AppActions.LoadLocalToken)
    loadLocalToken(ctx: StateContext<AppStateModel>) {
        const token = window.localStorage.getItem('token');
        ctx.patchState({
            token,
        });
    }

    @Action(AppActions.Login)
    login(ctx: StateContext<AppStateModel>, action: AppActions.Login) {
        return this.service.login(action.payload).pipe(
            tap(({ status, token }: any) => {
                ctx.patchState({
                    token,
                });
                window.localStorage.setItem('token', token);
                if (token) {
                    ctx.dispatch(new Navigate(['/dashboard']));
                }
            })
        );
    }

    @Action(AppActions.PostAmeduesSettings)
    addSetting(ctx: StateContext<AppStateModel>, action: AppActions.PostAmeduesSettings) {
        const {payload} = action;
        return this.service.postAmadeusSettings(payload).pipe(
            tap(({ status, token }: any) => {
                debugger;
            })
        );
    }

}
