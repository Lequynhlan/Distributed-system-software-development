import React, { useState, useContext } from "react";
import { Typography, TextField, Button } from "@material-ui/core/";
import axios from "axios";
import { Cart2 } from "./../../GlobalState";
export default function Comment({ post }) {
  const state = useContext(Cart2);
  const [user] = state.userAPI.user;
  const [comments, setComments] = useState([1, 2, 3, 4, 5]);
  const [comment, setComment] = useState("");

  const styles = {
    commentsInnerContainer: {
      height: "200px",
      overflowY: "auto",
      marginRight: "30px",
    },
  };

  const handleComment = () => {
    const finnalComment = `${user}: ${comment}`;
  };
  return (
    <div>
      <div styles={styles.commentsInnerContainer}>
        <Typography gutterBottom variant="h6">
          Comments
        </Typography>
        {comments?.map((c, i) => (
          <Typography key={i} gutterBottom variant="subtitle1">
            Comments {i}
          </Typography>
        ))}
      </div>
      <div style={{ width: "70%" }}>
        <Typography gutterBottom variant="h6">
          Write a comment
        </Typography>
        <TextField
          fullWidth
          minRows={4}
          variant="outlined"
          label="Comment"
          multiline
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <Button
          style={{ marginTop: "10px" }}
          fullWidth
          disabled={!comment.length}
          color="primary"
          variant="contained"
          onClick={handleComment}
        >
          Comment
        </Button>
      </div>
    </div>
  );
}
