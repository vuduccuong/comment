import Comment from '../components/rebuild-comment-fpt/'

export default compare = (a1, a2) => {
  if (JSON.stringify(a1) === JSON.stringify(a2)) {
    return true;
  }
  return false;
};

export default gen_comments = (comments, colorindex, path) => {
  return comments.map((comment, i) => {
    return (
      <Comment
        username={comment.username}
        date={comment.date}
        text={comment.text}
        votes={comment.votes}
        colorindex={colorindex}
        key={i}
        path={[...path, i]}
        comments={comment.comments}
      />
    );
  });
};
