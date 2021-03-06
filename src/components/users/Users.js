import User from "../user/User";
import {getUsers} from "../services/user.service";
import {useEffect, useState} from "react";
export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);
    return (
        <div>{
            users.map(value => <User item={value} key={value.id}/>)
        }
        </div>
    );
}
