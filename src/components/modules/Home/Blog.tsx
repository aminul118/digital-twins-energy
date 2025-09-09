import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import blogPosts from "@/constant/blogPosts";
import Image from "next/image";
import Link from "next/link";

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
              className=" bg-slate-100 dark:bg-slate-900 overflow-hidden group cursor-pointer flex flex-col justify-between"
            >
              <div>
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

                <h2 className="text-lg font-semibold text-gray-900 dark:text-white/90 mb-4 px-5 pt-5">
                  {heading}
                </h2>
              </div>
              <div className="px-5 pb-5">
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
