import {useEffect, useState} from "react";
import {getCommentOfPost} from "../services/user.service";
import Comments from "../comments/Comments";

export default function Post({item}) {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getCommentOfPost(item.id).then(value => setComments([...value]));
    }, [item.id]);
    return (
        <div>
            <h2>id: {item.id}</h2>
            <p>title: {item.title}</p>
            <p>body: {item.body}</p>
            <h3>Comments of posts:</h3>
            <Comments comments={comments}/>
        </div>
    );
}