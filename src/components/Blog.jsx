import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; // স্টাইলিং এর জন্য CSS ফাইল


// ব্লগ পোস্টের ডেটা
const blogPosts = [
  {
    id: 1,
    title: "React Hooks দিয়ে কীভাবে স্টেট ম্যানেজমেন্ট করবেন?",
    summary: "React Hooks ব্যবহার করে কীভাবে আপনার কম্পোনেন্টের স্টেট সহজে ম্যানেজ করা যায়, তার একটি বিস্তারিত নির্দেশিকা।",
    imageUrl: "https://via.placeholder.com/600x400?text=React+Hooks",
    date: "আগস্ট ৫, ২০২৪",
    category: "Development"
  },
  {
    id: 2,
    title: "ওয়েব ডিজাইন ট্রেন্ডস ২০২৪",
    summary: "২০২৪ সালের সেরা ওয়েব ডিজাইন ট্রেন্ডগুলো নিয়ে আলোচনা করা হয়েছে, যা আপনার ওয়েবসাইটকে আধুনিক করে তুলবে।",
    imageUrl: "https://via.placeholder.com/600x400?text=Web+Design",
    date: "জুলাই ৩০, ২০২৪",
    category: "Design"
  },
  {
    id: 3,
    title: "আপনার ব্যবসার জন্য সেরা ডিজিটাল মার্কেটিং কৌশল",
    summary: "একটি সফল ডিজিটাল মার্কেটিং স্ট্র্যাটেজি কীভাবে তৈরি করবেন, তার কিছু কার্যকর টিপস এবং কৌশল।",
    imageUrl: "https://via.placeholder.com/600x400?text=Digital+Marketing",
    date: "জুলাই ১৫, ২০২৪",
    category: "Marketing"
  },
  {
    id: 3,
    title: "আপনার জীবনে কামরুলের  কৌশল",
    summary: "কামরুল হাসান একজন দক্ষ ওয়েব ডেভেলপার, তার কিছু কার্যকর টিপস এবং কৌশল।",
    imageUrl: "https://via.placeholder.com/600x400?text=Digital+Marketing",
    date: "জুলাই ১৫, ২০২৪",
    category: "Marketing"
  }
];

const Blog = () => {
  return (
    <div className="blog-container">
      <section className="blog-intro">
        <h2>আমাদের ব্লগ</h2>
        <p>
          প্রযুক্তি, ডিজাইন এবং মার্কেটিং নিয়ে আমাদের সর্বশেষ লেখাগুলো পড়ুন।
        </p>
      </section>

      <section className="blog-posts-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post-card">
            <Link to={`/blog/${post.id}`}>
              <img src={post.imageUrl} alt={post.title} className="post-image" />
            </Link>
            <div className="post-content">
              <span className="post-category">{post.category}</span>
              <Link to={`/blog/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>
              <p>{post.summary}</p>
              <span className="post-date">{post.date}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="blog-cta">
        <Link to="/blog/all" className="view-all-button">
          সব পোস্ট দেখুন
        </Link>
      </section>
    </div>
  );
};

export default Blog;
