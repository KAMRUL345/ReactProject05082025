import React from 'react';
import './Services.css'; // স্টাইলিং এর জন্য CSS ফাইল
import { FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa'; // React Icons ব্যবহার

// আপনার সেবার ডেটা
const servicesData = [
  {
    icon: <FaLaptopCode />,
    title: "ওয়েব ডেভেলপমেন্ট",
    description: "আকর্ষণীয় এবং ব্যবহারকারী-বান্ধব ওয়েবসাইট তৈরি করুন। আমরা আধুনিক প্রযুক্তি ব্যবহার করে আপনার ব্যবসার জন্য উপযুক্ত সমাধান দেই।"
  },
  {
    icon: <FaMobileAlt />,
    title: "মোবাইল অ্যাপ ডেভেলপমেন্ট",
    description: "iOS এবং Android উভয় প্ল্যাটফর্মের জন্য শক্তিশালী এবং সুরক্ষিত মোবাইল অ্যাপ তৈরি করুন।"
  },
  {
    icon: <FaChartLine />,
    title: "ডিজিটাল মার্কেটিং",
    description: "আপনার অনলাইন উপস্থিতি বাড়াতে এবং নতুন গ্রাহক আকর্ষণ করতে আমাদের ডিজিটাল মার্কেটিং সেবা নিন।"
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <section className="services-intro">
        <h2>আমাদের সেবাগুলো</h2>
        <p>
          আমরা আপনার ব্যবসার চাহিদা অনুযায়ী উদ্ভাবনী এবং কার্যকর সমাধান প্রদান করি। 
          নিচে আমাদের প্রধান সেবাগুলো সম্পর্কে বিস্তারিত জানতে পারবেন।
        </p>
      </section>

      <section className="services-list">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <h2>আপনার প্রজেক্ট নিয়ে আলোচনা করতে চান?</h2>
        <p>
          আমাদের বিশেষজ্ঞদের সাথে কথা বলুন এবং আপনার স্বপ্নের প্রজেক্টকে বাস্তবে রূপ দিন।
        </p>
        <button className="cta-button">যোগাযোগ করুন</button>
      </section>
    </div>
  );
};

export default Services;