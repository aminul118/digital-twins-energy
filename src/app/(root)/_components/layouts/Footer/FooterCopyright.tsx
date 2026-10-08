import { Button } from "@/components/ui/button";
import Link from "next/link";

const DEVELOPER = {
  name: "Rangdhanu IT",
  url: "https://rangdhanuit.com",
};

const FooterCopyright = () => {
  return (
    <div className="container mx-auto mt-12 flex flex-col items-center justify-between gap-2 border-t border-gray-700 pt-6 text-sm text-gray-400 sm:flex-row">
      <p>
        &copy; {new Date().getFullYear()} Digital Twins Energy. All rights
        reserved.
      </p>
      <p className="flex items-center">
        Developed by
        <Button variant="link" className="px-1" asChild>
          <Link href={DEVELOPER.url} target="_blank" rel="noopener noreferrer">
            {DEVELOPER.name}
          </Link>
        </Button>
      </p>
    </div>
  );
};

export default FooterCopyright;
