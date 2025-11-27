// client/src/data/blogData.js
import JVM from '../assets/blogs/JVM.png';
import webassemblyImage from '../assets/blogs/webassembly.png';

export const blogPosts = [
  {
    id: 1,
    title: "Understanding Rust's Ownership Model",
    summary: "A deep dive into how the borrow checker enforces memory safety and concurrency without a garbage collector.",
    tag: "Rust",
    readTime: "6 min read",
    imageUrl: "https://placehold.co/600x300/1e293b/ffffff?text=Rust+Ownership",
    externalLink: "https://www.linkedin.com/pulse/rust-ownership-model"
  },
  {
    id: 2,
    title: "Implementing Microservices with Spring Boot and Kafka",
    summary: "Tutorial on setting up an event-driven architecture using modern Java frameworks.",
    tag: "Java",
    readTime: "12 min read",
    imageUrl: "https://placehold.co/600x300/1e293b/ffffff?text=Java+Kafka",
    externalLink: "https://medium.com/my-blog/springboot-kafka-guide"
  },
  {
    id: 3,
    title: "Testing Asynchronous Python Applications",
    summary: "A guide to effective unit and integration testing for applications built with asyncio and Fast API.",
    tag: "Python",
    readTime: "8 min read",
    imageUrl: "https://placehold.co/600x300/1e293b/ffffff?text=Async+Python",
    externalLink: "https://medium.com/my-blog/async-python-testing"
  },
  {
    id: 4,
    title: "The Future of Low-Level WebAssembly",
    summary: "Exploring the theoretical limits and potential industrial applications of WebAssembly for system programming.",
    tag: "Rust",
    readTime: "10 min read",
    imageUrl: webassemblyImage,
    
    externalLink: "https://www.linkedin.com/pulse/webassembly-future"
  },
  {
    id: 5,
    title: "A Deep Dive into JVM Garbage Collection",
    summary: "An analysis of different GC algorithms (G1, ZGC) and how they impact application performance in Java.",
    tag: "Java",
    readTime: "7 min read",
    imageUrl: JVM,
    externalLink: "https://medium.com/my-blog/jvm-garbage-collection"
  },
];

// Get all unique tags for filtering purposes
export const allTags = [...new Set(blogPosts.map(post => post.tag))];