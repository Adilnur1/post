import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { postContext2 } from "../context/PostContext";

const PostDetails = () => {
  const { user, getOnePost } = useContext(postContext2);
  const { id } = useParams();
  useEffect(() => {
    getOnePost(id);
  }, []);
  console.log(user);
  return (
    <div className="d">
      <Link className="link" to={"/"}>
        <h1>Users /</h1>
      </Link>
      {Array.isArray(user) &&
        user.map((elem) => (
          <h3 className="title" key={elem.id}>
            {elem.title}
          </h3>
        ))}
    </div>
  );
};

export default PostDetails;
