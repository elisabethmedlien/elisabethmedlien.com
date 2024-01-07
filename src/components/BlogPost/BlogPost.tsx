import { FC, ReactNode } from "react";
import "./BlogPost.css";

export interface Post {
  title: string;
  date: string;
}

const BlogPost: FC<{ post: Post; children: ReactNode | ReactNode[] }> = ({
  post,
  children,
}) => {
  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p className="blog-post-date">Publisert: {post.date}</p>
      {children}
    </div>
  );
};

export default BlogPost;
