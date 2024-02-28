import postData from "@/app/data/postData";

const PostDetailPage = ({ params }: any) => {
  const post = postData.find((item: any) => {
    return item.id === params.postId;
  });

  console.log("postData from Detail Page:", postData)

  return (
    <div>
      {post && (
        <div>
          <div>Title: {post.title}</div>
          <div>Description: {post.description}</div>
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
