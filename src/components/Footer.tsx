"use client";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGoogle,
  FaDribbble,
  FaInstagram,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


const Footer = () => {
  const productLinks = ["Features", "Pricing", "Changelog", "Roadmap", "Documentation"];
  const companyLinks = ["About", "Blog", "Careers", "Press Kit", "Contact"];
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer id="contact" className="border-t border-zinc-200 bg-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
           <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#ff4848" d="M11.13 7.171c-.496.42 2.943-.458 2.6 1.239c-.332 1.633-3.62-.343-7.223-.176c-1.594.073-3.054.53-3.985 1.668c.973-1.108 2.901-.844 2.398-.081c-1.172 1.776-3.376.497-4.92 3.975c.185-.4.685-1.196 2.843-1.526c1.586-.242 4.214-.016 5.054 1.297c.924 1.444-3.759 1.28-1.167 1.573c3.593.406 6.299 3.31 9.813 3.311c4.55 0 7.422-2.324 7.457-6.146c.063-6.923-9.101-8.318-12.87-5.134m6.768 7.554c-1.195-.033-2.404-.512-3.364-.98c-2.365-1.155-3.338-1.553-3.338-1.608c0-.067 1.42.484 3.813-.789c1.383-.735 1.432-1.377 2.89-1.505c1.73-.152 2.962 1.13 2.962 2.478s-1.222 2.453-2.963 2.404"/></svg>
            <span className="text-[#ff4848] font-black text-xl tracking-tight">weyou</span>
          </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
              Your entire professional identity in one powerful profile.
            </p>
            <div className="flex items-center gap-3">
              {[FaTwitter, FaGithub, FaLinkedin, FaDribbble].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, color: "#0a0a0a" }}
                  className="cursor-pointer text-zinc-400 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-5">Product</p>
            <ul className="space-y-3">
              {productLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-zinc-500 text-sm hover:text-zinc-900 cursor-pointer transition-colors font-medium">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-5">Company</p>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-zinc-500 text-sm hover:text-zinc-900 cursor-pointer transition-colors font-medium">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-5">Stay Updated</p>
            <p className="text-zinc-500 text-sm mb-4">Get product updates and hiring tips.</p>
            <div className="flex border border-zinc-200 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 px-4 py-2.5 text-sm text-zinc-700 bg-white outline-none placeholder:text-zinc-400 cursor-text"
              />
              <button className="cursor-pointer bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 hover:bg-zinc-700 transition-colors">
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Weyou Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((l) => (
              <a key={l} href="#" className="cursor-pointer text-zinc-400 text-xs hover:text-zinc-700 transition-colors font-medium">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;