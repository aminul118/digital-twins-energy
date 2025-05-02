import blogPosts from "@/lib/constant/blogPosts";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Params } from "@/lib/types/types";
import Image from "next/image";
import React from "react";

// ------> SEO Starts
export async function generateMetadata({ params }: Params) {
  const { id } = await params;

  // Fetch the blog based on the id
  const blog = blogPosts.find((blog) => blog.id === Number(id));

  if (blog) {
    return generateMetaTags({
      title: blog.heading,
      description: `${blog?.details?.slice(0, 1)}`,
      keywords: `Digital Twin Energy LLC, blog on ${blog.heading}`,
      image: blog.image,
      url: `https://www.digitaltwinsenergy.com/blog/${id}`,
    });
  }
}
// ------> SEO TAG END

const BlogDetailsPage = async ({ params }: Params) => {
  const { id } = await params;
  const idNumber = Number(id);

  const blog = blogPosts.find((blog) => blog.id === idNumber);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  const { heading, image, details, newsSection } = blog;

  return (
    <section className="p-6 max-w-5xl mx-auto space-y-6">
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
            className="text-gray-700 dark:text-white/80 lg:text-justify"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="space-y-8">
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
    </section>
  );
};

export default BlogDetailsPage;
