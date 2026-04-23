"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Features", "Profiles", "Recruiters", "Pricing", "Contact"];

  return (
    <div>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#ff4848" d="M11.13 7.171c-.496.42 2.943-.458 2.6 1.239c-.332 1.633-3.62-.343-7.223-.176c-1.594.073-3.054.53-3.985 1.668c.973-1.108 2.901-.844 2.398-.081c-1.172 1.776-3.376.497-4.92 3.975c.185-.4.685-1.196 2.843-1.526c1.586-.242 4.214-.016 5.054 1.297c.924 1.444-3.759 1.28-1.167 1.573c3.593.406 6.299 3.31 9.813 3.311c4.55 0 7.422-2.324 7.457-6.146c.063-6.923-9.101-8.318-12.87-5.134m6.768 7.554c-1.195-.033-2.404-.512-3.364-.98c-2.365-1.155-3.338-1.553-3.338-1.608c0-.067 1.42.484 3.813-.789c1.383-.735 1.432-1.377 2.89-1.505c1.73-.152 2.962 1.13 2.962 2.478s-1.222 2.453-2.963 2.404"/></svg>
            <span className="text-[#ff4848] font-black text-xl tracking-tight">weyou</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-zinc-500 hover:text-zinc-900 text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {l}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-zinc-600 text-sm font-medium hover:text-zinc-900 cursor-pointer transition-colors">
              Sign in
            </a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer bg-gradient-to-r from-red-600 to-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-zinc-700 transition-colors flex items-center gap-2"
            >
              Create Profile <ArrowRight size={14} />
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 cursor-pointer text-zinc-700"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-16 z-40 bg-white border-b border-zinc-200 px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-zinc-700 font-medium cursor-pointer text-base"
              >
                {l}
              </a>
            ))}
            <a
              href="#"
              className="cursor-pointer bg-zinc-900 text-white px-5 py-3 rounded-lg text-sm font-semibold text-center"
            >
              Create Profile
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;