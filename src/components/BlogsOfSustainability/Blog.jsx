import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sustainabilityContext } from "../../context/sustainabilityContext";

function Blog() {
  const { slug } = useParams();
  const { getSustainBySlug } = useContext(sustainabilityContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(getSustainBySlug(slug));
    window.scrollTo(0, 0); // ✅ Ensure the page scrolls to the top when the slug changes
  }, [slug]); // 🔥 Dependency array includes slug to trigger re-fetch

  if (!blog) return <p>Loading...</p>; // ✅ Show a loading state while fetching data

  return (
    <div className="bg-mainColor text-white w-full h-full py-20">
      <div className="w-3/4 m-auto">
        <h1 className="mt-10 mb-10 text-center">{blog.title}</h1>
        <p className="my-7">{blog.text[0]}</p>

        <div
          style={{ backgroundImage: `url(${blog.img})` }}
          className="bg-no-repeat md:bg-fixed bg-contain bg-center w-full md:h-[60vh] h-[35vh]"
        ></div>

        {blog.text.slice(1).map((paragraph, index) => (
          <p key={index} className="my-7">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default Blog;
