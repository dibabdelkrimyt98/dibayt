// client/src/data/blogData.js
import aiquest from '../assets/blogs/aiquest.jpg';
import java25 from '../assets/blogs/java25.jpg';
import mozila from '../assets/blogs/mozila.jpg';
import RN from '../assets/blogs/RN.jpg';
import rust from '../assets/blogs/rust.jpg';

export const blogPosts = [
  {
    id: 1,
    title: "À la découverte de Rust : une vraie révélation technologique ! ",
    summary: "A deep dive into how the borrow checker enforces memory safety and concurrency without a garbage collector.",
    tag: "Rust",
    readTime: "6 min read",
    imageUrl: rust,
    externalLink: "https://www.linkedin.com/posts/dibabdelkrimyt98_programming-innovation-tech-activity-7321994220624306176-zMNz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlTlgsBaAu1tPup-0rqlQh14Jyzcy-fbUw"
  },
  {
    id: 2,
    title: "Une première aventure dans le monde du quantique et de l’intelligence artificielle",
    summary: "Tutorial on setting up an event-driven architecture using modern Java frameworks.",
    tag: "Quantum computing",
    readTime: "4 min read",
    imageUrl: aiquest,
    externalLink: "https://www.linkedin.com/posts/dibabdelkrimyt98_aiquest-quanta-researchabrpaper-activity-7324774304464723968-mMmX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlTlgsBaAu1tPup-0rqlQh14Jyzcy-fbUw"
  },
  {
    id: 3,
    title: "Learning React Native: A Journey Powered by Academic Foundations",
    summary: "A guide to effective unit and integration testing for applications built with asyncio and Fast API.",
    tag: "React Native",
    readTime: "2 min read",
    imageUrl: RN,
    externalLink: "https://www.linkedin.com/posts/dibabdelkrimyt98_reactnative-mobiledevelopment-computerscience-activity-7352281772392415232-_MEj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlTlgsBaAu1tPup-0rqlQh14Jyzcy-fbUw"
  },
  {
    id: 4,
    title: "Java n'est plus le même : comment Java 25 devient un socle de choix pour l'IA ",
    summary: "Exploring the theoretical limits and potential industrial applications of WebAssembly for system programming.",
    tag: "Java",
    readTime: "5 min read",
    imageUrl: java25,
    
    externalLink: "https://www.linkedin.com/posts/dibabdelkrimyt98_java-java-ia-activity-7394291756579860480-wQcP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlTlgsBaAu1tPup-0rqlQh14Jyzcy-fbUw"
  },
  {
    id: 5,
    title: "Firefox renforce encore la protection de vos données !",
    summary: "An analysis of different GC algorithms (G1, ZGC) and how they impact application performance in Java.",
    tag: "Cyber Security",
    readTime: "3 min read",
    imageUrl: mozila,
    externalLink: "https://www.linkedin.com/posts/dibabdelkrimyt98_firefox-protection-donnaezes-activity-7395725843051855872-HCsK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlTlgsBaAu1tPup-0rqlQh14Jyzcy-fbUw"
  },
];

// Get all unique tags for filtering purposes
export const allTags = [...new Set(blogPosts.map(post => post.tag))];