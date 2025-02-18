import { useEffect } from "react";
import BlogLayout from "../../layouts/blog";

import Details from "../../components/Blog/Blog-Details/Details";

const Index = () => {

  
  useEffect(() => {
    let body = document.querySelector("body");
    body.classList.add("bg-gr");
    body.classList.remove("d3-dark");
  }, []);

  return (
    <BlogLayout footerClass="bg-gray">
      <Details/>
    </BlogLayout>
  )
}

export default Index