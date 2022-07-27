import React from "react";
import { BlogSection, BlogHeading } from "./blog.styled";
import { PaintGrey } from "../tags/PaintGrey.styled";
import "./blog.css";

function Blog() {
  return (
    <>
      <BlogSection>
        <BlogHeading>
          <PaintGrey>&lt;h2&gt;</PaintGrey> Blog
          <PaintGrey>&lt;/h2&gt;</PaintGrey>
        </BlogHeading>

        
      </BlogSection>
    </>
  );
}

export default Blog;
