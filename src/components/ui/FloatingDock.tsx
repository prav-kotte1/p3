"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Github, 
  FileText, 
  Mail, 
  Linkedin, 
  Terminal, 
  Trophy, 
  Code 
} from "lucide-react"; 
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const items = [
    {
        icon: Home,
        label: "Top",
        onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
        mobileHide: true // We can hide this on tiny screens if needed
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/prav-kotte1",
        external: true
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kotte-pravallika/",
        external: true
    },
    {
        icon: Terminal, 
        label: "LeetCode",
        href: "https://leetcode.com/u/pravallika67/",
        external: true
    },
    {
        icon: Trophy, 
        label: "CodeForces",
        href: "https://codeforces.com/profile/pkotte",
        external: true
    },
    {
        icon: Code, 
        label: "CodeChef",
        href: "https://www.codechef.com/users/deft_foxes_93",
        external: true
    },
    {
        icon: FileText,
        label: "Resume",
        href: "/resume.pdf",
        external: true
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:pravallikakotte11@gmail.com",
        external: true
    },
];

export const FloatingDock = () => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                setVisible(false);
            } else {
                setVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.nav
            className="fixed bottom-4 md:bottom-6 left-1/2 z-50 w-max max-w-[95vw]"
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{
                y: visible ? 0 : 100,
                x: "-50%",
                opacity: visible ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div className="flex items-center gap-0.5 md:gap-1 px-1.5 py-1.5 md:px-2 md:py-2 rounded-2xl bg-white/90 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl">
                <TooltipProvider delayDuration={0}>
                    {items.map((item, i) => {
                        const Icon = item.icon;

                        const content = (
                            <motion.div
                                // Smaller padding on mobile (p-1.5 vs p-2.5)
                                className="p-1.5 md:p-2.5 rounded-xl text-zinc-500 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                {/* Smaller icon size on mobile (16 vs 18) */}
                                <Icon className="w-4 h-4 md:w-[18px] md:h-[18px]" strokeWidth={1.5} />
                            </motion.div>
                        );

                        return (
                            <Tooltip key={i}>
                                <TooltipTrigger asChild>
                                    <div className={item.mobileHide ? "hidden sm:block" : "block"}>
                                        {item.href ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer">
                                                {content}
                                            </a>
                                        ) : (
                                            <button onClick={item.onClick} type="button">
                                                {content}
                                            </button>
                                        )}
                                    </div>
                                </TooltipTrigger>
                                {/* Hide tooltips on touch devices to prevent "sticky" hover states */}
                                <TooltipContent className="hidden md:block text-xs font-medium">
                                    {item.label}
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </TooltipProvider>
            </div>
        </motion.nav>
    );
};