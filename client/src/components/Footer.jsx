import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* Logo */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Kartik's
              </span>
              Blog
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-2 sm:gap-6">
            {/* About */}
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://kartikverma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            {/* Follow Us */}
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.linkedin.com/in/kartik-verma-4b99012b8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
                <Footer.Link
                  href="https://www.instagram.com/_kenpachi_.z/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <Footer.Divider />

        {/* Bottom */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Kartik's blog"
            year={new Date().getFullYear()}
          />

          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://github.com/kartikvermajs"
              icon={BsGithub}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/kartik-verma-4b99012b8"
              icon={BsLinkedin}
              target="_blank"
            />
            <Footer.Icon
              href="https://www.instagram.com/_kenpachi_.z/"
              icon={BsInstagram}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
