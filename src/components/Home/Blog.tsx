import blogPosts from "@/lib/constant/blogPosts";
import SectionTitle from "../ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import { Button } from "../ui/button";

const Blog = () => {
  return (
    <Container>
      <SectionTitle title="Articles & Blog Posts With Useful Information" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-7xl mx-auto">
        {blogPosts?.map((blog) => {
          const { id, image, heading } = blog;
          return (
            <div
              data-aos="fade-up"
              key={id}
              className=" bg-slate-100 dark:bg-slate-900 overflow-hidden group cursor-pointer"
            >
              {/* Image Container with Zoom Effect */}
              <div className="overflow-hidden">
                <Image
                  src={image}
                  alt={heading}
                  width={600}
                  height={400}
                  className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white/90 mb-4">
                  {heading}
                </h2>

                <Button variant="destructive" className="rounded-none">
                  <Link href={`/blog/${id}`}>READ MORE</Link>
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Blog;
