import { useNavigate } from "react-router-dom";
import useFetch from "react-fetch-hook"
import camera from "../images/camera.png"
import icon from "../images/icon.png"
import "./css/posts.css"


const Posts = () => { 
  function createpost(post) {
    return (
      <>
        <div><section id="card">
          <section id="card-header">
            <div>
              <div className="name">{post.name}</div>
              <div className="place">{post.location}</div>
            </div>
            <span id="dots">
              <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </span>
          </section>
          <section id="image">
            <img src={post.image} alt="place" />
          </section>
          <section className="card-actions">
            <span>
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </span>
            <span>
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
            </span>
            <span id="date">
              14/10/2022
            </span>
          </section>
          <section id="likes">
            100 likes
          </section>
          <section id="description">
            {post.description}
          </section>
        </section></div>
      </>
    )
  }
  const navigate = useNavigate();
  const { data } = useFetch("https://instaclone-node-app.herokuapp.com/allposts");
  let arr = []
  for (var key in data) {
    let posts = data[key]
    for (let i = posts.length - 1; i > 0; i--) {
      console.log(posts[i])
      var create = createpost(posts[i])
      arr.push(create)
    }
  }
  return (
    <>
      <div>
        <header>
          <div className="heading">
            <img src={icon} alt="icon" className="icon" />
            <div className="appname">instaclone</div>
          </div>

          <div>
            <img src={camera} alt="cam" onClick={() => navigate("/create")} className="camera" />
          </div>
          <hr />
        </header>
        <div className="card">{[...arr]}</div>
        </div>
    </>
  );
};

export default Posts
