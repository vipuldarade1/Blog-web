import Header from "../../component/header/header";
import { useParams } from "react-router-dom";
const Bpage = (props) => {
  const Blogin=props.blogdata;
  console.log(Blogin)
  const params=useParams()
 
  const selectblog=Blogin.find(blog=>blog.title===params.title)
  console.log(selectblog)
  
 
  return (
    <>
      <Header />
      <div class="container">
        <img className="container w-20 h-4/6" src={selectblog.urlToImage} alt='blog_img'></img>
        <h1>{selectblog.title}</h1>
        <h5 className="flex"><p className="text-slate-400">Author:</p> {selectblog.author}</h5>
        <p>source:{selectblog.source.name}</p>
        <p className="text-slate-400">{selectblog.publishedAt}</p>
        <p>{selectblog.description}</p>
        <p>{selectblog.content}</p>
          </div>
    </>
  );
};

export default Bpage;
