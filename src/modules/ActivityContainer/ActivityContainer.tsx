import "./container.scss";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import { CardContainer } from "../CardFlow/CardContainer";
import { selectIsAuth } from "../../utils/selectors";

export const ActivityContainer = function () {
  const { path } = useRouteMatch();
  const isAuth = selectIsAuth();
  console.log(path);

  return (
    <div className={`activity-container ${!isAuth ? 'guest' : ''}`}>
      <Switch>
        <Route path={`${path}wishes`}>
          <>
            <CardContainer />
          </>
        </Route>
        <Route path={`${path}about`}>Actions</Route>
        <Route path={`${path}dashboard`}>Dashboard</Route>
        <Route path={`${path}blog`}>Blog</Route>
      </Switch>
    </div>
  );
};
