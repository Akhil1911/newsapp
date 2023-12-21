import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostById } from "./Store/Thunks/thunk";
import Spinner from "react-bootstrap/Spinner";
// import Error404 from "./Error404";
import Newsletter from './Newsletter'

const PostComponent = () => {
  const params = useParams();
  const singleItem = useSelector((state) => state.news.articles.singleItem);
  // const error = useSelector((state) => state.news.error);
  const loading = useSelector((state) => state.news.loading);
  const postsLen = useSelector((state) => state.news.postsLen);
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    if (params.kt > postsLen) {
        navigate("/404")  
    } else {
      dispatch(fetchPostById(params.kt));
    }

  }, []);

  // console.log(singleItem.title)
  // console.log("FIRST WAY" , singleItem != []);
  // console.log("SECOND WAY", !(singleItem == []));
  // console.log("SECOND WAY2.0", !singleItem == []);

  return (
    <div>
      {!loading ? (
        <div className="text-center m-4">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
          <Spinner animation="grow" variant="light" />
        </div>
      ) : null}
      {singleItem ? (
        <div className="text-center">
          <h1>{singleItem.title}</h1>
          <img
            src={`${singleItem.image}?${singleItem.id}`}
            alt={singleItem.title}
          />
          <h1>Written By: {singleItem.author}</h1>
          <h3>
            Created At:{new Date(singleItem.createdAt).toLocaleDateString()}
          </h3>

          <h1>Description</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: singleItem.content,
            }}
          ></div>
          <Newsletter/>
        </div>
      ) : null}
    </div>
  );
};

export default PostComponent;
