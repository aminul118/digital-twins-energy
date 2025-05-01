import Container from "@/components/ui/Container";
import blogPosts from "@/lib/constant/blogPosts";
import { Params } from "@/lib/types/types";
import Image from "next/image";
import React from "react";

const BlogDetailsPage = async ({ params }: Params) => {
  const { id } = await params;
  const idNumber = Number(id);

  const blog = blogPosts.find((blog) => blog.id === idNumber);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  const { heading, image, details, newsSection } = blog;

  return (
    <Container className="p-6  mx-auto space-y-6">
      <Image
        src={image}
        alt={heading}
        width={800}
        height={500}
        className="rounded-xl"
      />
      <h1 className="text-3xl font-bold">{heading}</h1>

      <div className="space-y-4">
        {details?.map((paragraph, index) => (
          <p
            key={index}
            className=" text-gray-700 dark:text-white/80 lg:text-justify"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className=" space-y-8">
        {newsSection?.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-white mb-2 mt-16">
              {section?.heading}
            </h2>
            <div className="space-y-4">
              {section?.content?.map((contentLine, i) => (
                <p
                  key={i}
                  className="text-gray-700 dark:text-white/80 lg:text-justify"
                >
                  {contentLine}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BlogDetailsPage;
