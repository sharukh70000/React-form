import { useState } from "react"
import "./NewComments.css";
import NewCommentsForms from "./NewCommentsForms";

export default function NewComments() {
    let [comments, setComments] = useState([{
        username: '@sk',
        remarks: "great job!",
        rating: 4
    }])
 
    let addNewComments = (comments) => {
        setComments((currComments) => [...currComments, comments])
        // console.log("added New Comments")
    }

    return (
        <>
            <div>
                <h4> All Comments</h4>
                {comments.map((comments, idx) => (
                    <div className="comments" key={idx}>
                        <span>{comments.remarks}</span>
                        &nbsp;&nbsp;
                        <span>(rating = {comments.rating})</span>
                        <p>{comments.username}</p>
                    </div>

                ))}
                {/* <div className="comments">
                    <span>{comments[0].remarks}</span>
                    &nbsp;&nbsp;
                    <span>(rating = {comments[0].rating})</span>
                    <p>{comments[0].username}</p>
                </div> */}
            </div>
            <hr /><hr />
            <NewCommentsForms addNewComments={addNewComments} />
        </>

    )
}