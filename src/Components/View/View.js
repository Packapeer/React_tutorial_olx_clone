import React, { useEffect, useState, useContext } from 'react';
import './View.css';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';

function View() {
  const [userDetails, setUserDetails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (postDetails && postDetails.userId) {
      const { userId } = postDetails;
      firebase
        .firestore()
        .collection('users')
        .where('id', '==', userId)
        .get()
        .then((res) => {
          res.forEach((doc) => {
            setUserDetails(doc.data());
          });
        });
    }
  }, [firebase, postDetails]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        {postDetails && postDetails.url && (
          <img src={postDetails.url} alt="" />
        )}
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails && postDetails.price}</p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails && (
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default View;
