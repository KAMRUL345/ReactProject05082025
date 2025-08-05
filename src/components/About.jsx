import React from 'react';
import './About.css'; // স্টাইলিং এর জন্য CSS ফাইল

// টিমের সদস্যদের ডেটা
const teamMembers = [
  {
    name: "জন স্মিথ",
    role: "প্রতিষ্ঠাতা ও সিইও",
    bio: "১০ বছরের বেশি অভিজ্ঞতা নিয়ে জন কোম্পানিকে নেতৃত্ব দিচ্ছেন।",
    image: "https://via.placeholder.com/150" // Placeholder image
  },
  {
    name: "আশা খান",
    role: "চীফ মার্কেটিং অফিসার",
    bio: "মার্কেটিং স্ট্র্যাটেজি তৈরিতে আশা এক অনন্য প্রতিভার অধিকারী।",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "রবার্ট ব্রাউন",
    role: "হেড অফ ইঞ্জিনিয়ারিং",
    bio: "রবার্ট আমাদের প্রযুক্তিগত উদ্ভাবনের প্রধান চালিকাশক্তি।",
    image: "https://via.placeholder.com/150"
  },
];

const About = () => {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>আমাদের সম্পর্কে</h1>
        <p>
          আমাদের কোম্পানি (XYZ) প্রতিষ্ঠিত হয়েছে একটি সাধারণ লক্ষ্য নিয়ে: 
          উদ্ভাবনী প্রযুক্তি দিয়ে মানুষের জীবনকে সহজ করা। আমরা বিশ্বাস করি, 
          প্রযুক্তি মানুষের হাতে নতুন সম্ভাবনা এনে দিতে পারে।
        </p>
      </section>

      <section className="about-mission-vision">
        <div className="mission">
          <h2>আমাদের লক্ষ্য (Mission)</h2>
          <p>
            বিশ্বের সবচেয়ে নির্ভরযোগ্য এবং ব্যবহারকারী-বান্ধব সমাধান তৈরি করা, 
            যা প্রতিদিনের সমস্যাগুলো সহজে সমাধান করতে পারে।
          </p>
        </div>
        <div className="vision">
          <h2>আমাদের ভিশন (Vision)</h2>
          <p>
            প্রযুক্তিকে প্রতিটি বাড়িতে এবং প্রতিটি মানুষের কাছে পৌঁছে দিয়ে 
            একটি উন্নত ও স্মার্ট সমাজ গড়ে তোলা।
          </p>
        </div>
      </section>

      <section className="about-team">
        <h2>আমাদের টিম</h2>
        <p>
          আমাদের সাফল্য আমাদের প্রতিভাবান ও নিবেদিত টিমের সম্মিলিত প্রচেষ্টার ফল।
        </p>
        <div className="team-members-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <img src={member.image} alt={member.name} className="member-image" />
              <h3>{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;