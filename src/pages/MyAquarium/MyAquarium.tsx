import "./MyAquarium.css";
import Logo from "../../assets/logo2.svg";
import FishboneIcon from "../../assets/fish-bone.svg";
import BlogPost from "../../components/BlogPost/BlogPost";
import { blogPosts } from "../../components/BlogPosts/BlogPosts";

function MyAquarium() {
  return (
    <main>
      <img className="logo" src={Logo} />
      <header>
        <h1>Mitt akvarium</h1>
      </header>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img width="40" src={FishboneIcon} loading="lazy" />
        <p>
          Jeg skaffet et akvarie 9 august 2023. Her logger jeg helsemetrikker og
          fører dagbok for akvariet mitt.
        </p>
      </div>

      <div className="container">
        {blogPosts.map((post) => (
          <BlogPost post={post}>{post.node}</BlogPost>
        ))}
      </div>
    </main>
  );
}

export default MyAquarium;
