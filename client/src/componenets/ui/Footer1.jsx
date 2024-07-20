import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

const sections = [
  {
    title: "Solutions",
    items: ["Marketing", "Analytics", "Commerce", "Data", "Cloud"],
  },
  {
    title: "Support",
    items: ["Pricing", "Documentation", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs", "Press", "Partners"],
  },
  {
    title: "Legal",
    items: ["Claims", "Privacy", "Terms", "Policies", "Conditions"],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Twitch", icon: FaTwitch, link: "https://www.twitch.tv/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];

const Footer1 = () => {
  return (
    <div
      className="w-full bg-gradient-to-b from-yellow-500 to-orange-400 text-gray-300 py-y px-2 transition-all duration-300"
      style={{ backgroundImage: "linear-gradient(to bottom, white, grey)" }}
    >
      <div className=" text-slate-900 max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index} className="transition-all duration-300 hover:text-slate-700">
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-slate-900 hover:text-slate-700 transition-all duration-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-2 pt-8 md:pt-2 text-slate-900">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row text-slate-900">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4 transition-all duration-300"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 transition-all duration-300 hover:bg-orange-500 hover:text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-slate-900">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return (
              <a key={index} href={x.link} target="_blank" rel="noopener noreferrer">
                <x.icon className="hover:text-slate-700 transition-all duration-300" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer1;