"ues client";
import { Code2, FileText, Layers, Link2, Shield, UserCheck } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    tag: string;
}


const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            variants={stagger}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={className}
        >
            {children}
        </motion.div>
    );
}



const Features = () => {

    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 32 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    };

    const scaleIn: Variants = {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    };


    const features: Feature[] = [
        {
            icon: <Layers size={22} />,
            title: "Unified Professional Profile",
            description: "Everything in one link. Your bio, skills, projects, and experience — beautifully presented.",
            tag: "Core",
        },
        {
            icon: <Code2 size={22} />,
            title: "Project Portfolio Showcase",
            description: "Display live projects with tech stacks, descriptions, screenshots, and GitHub links.",
            tag: "Portfolio",
        },
        {
            icon: <FileText size={22} />,
            title: "Resume & Career Timeline",
            description: "Interactive, visual work history that beats any PDF resume hands down.",
            tag: "Career",
        },
        {
            icon: <Link2 size={22} />,
            title: "Social Account Integration",
            description: "Connect GitHub, LinkedIn, Twitter, Dribbble and sync your contributions automatically.",
            tag: "Integrations",
        },
        {
            icon: <UserCheck size={22} />,
            title: "Recruiter-Ready Profiles",
            description: "Optimized for discovery. Get found by top companies actively hiring for your skills.",
            tag: "Recruiting",
        },
        {
            icon: <Shield size={22} />,
            title: "Verified Professional Identity",
            description: "Build trust with verified credentials, certifications, and employment history.",
            tag: "Trust",
        },
    ];

    return (
        <section id="features" className="py-32 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection>
                    <motion.div variants={fadeUp} className="max-w-2xl mb-20">
                        <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-4 block">
                            Platform Features
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight leading-tight mb-5">
                            Everything you need
                            <br />
                            in one profile.
                        </h2>
                        <p className="text-zinc-500 text-lg leading-relaxed">
                            Stop maintaining ten different accounts. Weyou is the professional identity layer
                            the internet always needed.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200">
                        {features.map((f) => (
                            <motion.div
                                key={f.title}
                                variants={scaleIn}
                                whileHover={{ backgroundColor: "#fff", y: -2 }}
                                className="bg-white p-8 cursor-default group transition-all duration-200"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-11 h-11 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                                        {f.icon}
                                    </div>
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest bg-zinc-100 px-2.5 py-1 rounded-full">
                                        {f.tag}
                                    </span>
                                </div>
                                <h3 className="text-lg font-black text-zinc-900 mb-2">{f.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{f.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}

export default Features;