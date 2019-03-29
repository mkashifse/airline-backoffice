import { State, Action, StateContext } from '@ngxs/store';
import { AppStateModel } from './app.state.model';
import { AppActions } from './app.actions';
import { AppService } from './app.service';
import { tap } from 'rxjs/operators';


@State<AppStateModel>({
    name: 'app',
    defaults: new AppStateModel(),
})
export class AppState {

    constructor(
        private service: AppService,
    ) {

    }

    @Action(AppActions.Login)
    login(ctx: StateContext<AppStateModel>, action: AppActions.Login) {

        return this.service.login(action.payload).pipe(
            tap((resp: any) => {
                debugger;
            })
        );

    }

}
