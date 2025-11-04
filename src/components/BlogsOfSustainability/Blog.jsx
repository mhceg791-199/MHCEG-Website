
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sustainabilityContext } from "../../context/sustainabilityContext";
import FirstSectionDetailss from "../shared/FirstSectionDetailss/FirstSectionDetailss";
import TitleWithList from "../shared/TitleWithList/TitleWithList";

function Blog() {
  const { slug } = useParams();
  const { getSustainBySlug } = useContext(sustainabilityContext);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    setBlog(getSustainBySlug(slug));
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Loading...
      </div>
    );

  const FirstDetails = {
    poster: blog.poster,
    logo: blog.logo,
    title: { firstWord: blog.title, secondWord: "" },
    text: blog.text[0],
  };

  return (
    <div>
      <FirstSectionDetailss data={FirstDetails} />
      
      <div className="max-w-7xl mx-auto px-6 mb-8 space-y-8 md:translate-y-[-32%]">
        {blog.text.slice(1).map((paragraph, index) => (
          <TitleWithList
            key={index}
            text={paragraph}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
