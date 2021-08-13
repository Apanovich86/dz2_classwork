import Address from "../address/Address";
import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPostOfUser} from "../services/user.service";

export default function User({item, item: {address}}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPostOfUser(item.id).then(value => setPosts([...value]));
    }, [item.id]);
    return (
        <div>
            <h2>Name: {item.name}</h2>
            <h2>id: {item.id}</h2>
            <p>email: {item.email}</p>
            <p>username: {item.username}</p>
            <Address address={address}/>
            <br/>
            <h2>Posts of user:</h2>
            <Posts posts={posts}/>
        </div>
    )
}