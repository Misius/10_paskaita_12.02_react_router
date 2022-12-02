import { Link, Switch, Route } from "react-router-dom";
import { usersData } from "../../App";
import SingleUser from "./SingleUser";

export default function Users(props) {
    return (
        <div>
            <h1>Users page</h1>
            <p className="subtitle">Users</p>
            <button>Load more</button>

            <ul>
                {usersData.map((uObj) => (
                    <li key={uObj.id}>
                        <Link to={`/users/${uObj.id}`}>{uObj.name}</Link>
                    </li>
                ))}
            </ul>
            <hr />
            {/* <Switch>

                <Route path={'/users/1'}>
                    <SingleUser />
                    <p>First user</p>
                </Route>

                <Route path={'/users/2'}>
                <SingleUser />
                    <p>Second user</p>
                </Route>

                <Route path={'/users/3'}>
                <SingleUser />
                    <p>Third user</p>
                </Route>

            </Switch> */}
        </div>
    )
}