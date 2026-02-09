import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { VoiceTrackerDiagram } from "@/components/diagrams/VoiceTrackerDiagram";
import { NexusNoteDiagram } from "@/components/diagrams/NexusNoteDiagram";
import { ChatExporterDiagram } from "@/components/diagrams/ChatExporterDiagram";
import { CineQuestDiagram } from "@/components/diagrams/CineQuestDiagram";

export const PERSONAL_INFO = {
    name: "Pravallika Kotte",
    title: "Software Engineer & developer",
    headline: "I'm a final-year dual-degree IT student at ABV-IIITM Gwalior with a strong foundation in software engineering and a passion for building practical solutions. I enjoy working on meaningful projects that combine clean design, efficient code, and thoughtful problem-solving. When I'm not coding, you can find me tuning into music or dancing it out and exploring new technologies to expand my skills across development, design, and applied research.",
    email: "pravallikakotte11@gmail.com",
    socials: [
        { name: "GitHub", href: "https://github.com/prav-kotte1", icon: Github },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/kotte-pravallika/", icon: Linkedin },
        // { name: "X (Twitter)", href: "https://x.com/Prateek40593386", icon: Twitter },
        { name: "Email", href: "mailto:pravallikakotte11@gmail.com", icon: Mail },
    ],
};

export const PROJECTS = [
    {
        id: "voice-expense-tracker",
        title: "Voice Expense Tracker",
        description: "A financial dashboard that listens. Log expenses via natural language using custom Regex parsing and Web Speech API.",
        tech: ["React", "Node.js", "MongoDB", "Web Speech API"],
        link: "https://voex.prateekdwivedi.me/",
        gradient: "from-blue-500/20 to-cyan-500/20",
        Diagram: VoiceTrackerDiagram,
        featured: true,
    },
    {
        id: "cinequest",
        title: "CineQuest",
        description: "Frame-by-frame movie trivia game. Guess Bollywood and Hollywood movies from blurred posters.",
        tech: ["Next.js", "React", "Tailwind", "Gemini API"],
        link: "https://cinequest.prateekdwivedi.me/",
        gradient: "from-yellow-500/20 to-orange-500/20",
        Diagram: CineQuestDiagram,
        featured: true,
    },
    {
        id: "nexusnote",
        title: "NexusNote",
        description: "An intelligent productivity canvas for organizing thoughts. Features a sticky-note interface with real-time state management.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Zustand"],
        link: "https://github.com/dprateek996/nexusnote",
        gradient: "from-purple-500/20 to-pink-500/20",
        Diagram: NexusNoteDiagram,
    },
    {
        id: "chat-exporter",
        title: "Chat Exporter AI",
        description: "Browser extension to export and summarize chat logs into PDF/JSON using local AI processing models.",
        tech: ["JavaScript", "Manifest V3", "GenAI", "Chrome API"],
        link: "https://github.com/dprateek996/chat_exporter",
        gradient: "from-accent-500/20 to-green-500/20",
        Diagram: ChatExporterDiagram,
    },
];

export const EXPERIENCE = [
    {
        company: "ABV-IITIM Gwalior",
        role: "Research Intern",
        date: "May 2025 - Jul 2025",
        bullets: [
            "Conducted a comparative analysis of LSTM and CNN models combined through model fusion to predict phishing URL detection. ",
            "Evaluated key performance metrics to achieve robust and accurate cross-validation results.",
        ]
    },
];

// Tech stack with SVG icon URLs (using devicons)
export const TECH_STACK = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

// export const EXTRA_PROJECTS = [
//     {
//         title: "Pinterest Backend",
//         description: "Robust REST API for a social image platform. Features Passport.js auth, MongoDB schemas, and session management.",
//         tech: ["Node.js", "Express", "MongoDB", "Passport.js"],
//         link: "https://github.com/dprateek996/Pinterest-Backend",
//         repo: "https://github.com/dprateek996/Pinterest-Backend"
//     },
//     {
//         title: "Perfume Gallery",
//         description: "Full-stack e-commerce platform for luxury fragrances. Includes product management, cart logic, and responsive UI.",
//         tech: ["React", "Node.js", "Express", "CSS Modules"],
//         link: "https://perfume-gallery.vercel.app",
//         repo: "https://github.com/dprateek996/perfume-gallery"
//     },
//     {
//         title: "Realtime Tracker",
//         description: "Live geolocation tracking application using WebSockets to broadcast user movements in real-time.",
//         tech: ["Node.js", "Socket.io", "Leaflet Maps"],
//         link: "https://github.com/dprateek996/Realtime-Tracker",
//         repo: "https://github.com/dprateek996/Realtime-Tracker"
//     },
// ];

// export const CURRENTLY_LEARNING = {
//     title: "Building Microservices with Go",
//     channel: "Nic Jackson",
//     thumbnail: "https://i.ytimg.com/vi/VzBGi_n65iU/hqdefault.jpg",
//     link: "https://www.youtube.com/watch?v=VzBGi_n65iU",
//     progress: 42,
//     watching: true
// };
