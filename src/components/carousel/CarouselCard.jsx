import React from "react";
import { CarouselPlugin } from "./Carousel";
import proImage from "./../../assets/WhatsApp Image 2024-08-13 at 19.51.02.jpeg";

// Sample data
const customerData = [
  {
    "id": 1,
    "name": "John Doe",
    "feedback": "I've tried a few locksmiths around here, but the service from Pick and Lock genuinely stands out. They're always reliable, and it's comforting to know they cover all of Melbourne",
    "image": proImage,
    "rating": 5,
    "date": "2024-09-01"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "feedback": "Was locked out of my house late at night and didn't know what to do. Gave Pick and Lock a call, and their locksmith was there in about 15 minutes. So grateful for the quick help.",
    "image": proImage,
    "rating": 4,
    "date": "2024-09-05"
  },
  {
    "id": 3,
    "name": "Mike Johnson",
    "feedback": "Moved to a new place in Melbourne and wanted to change the locks. Got in touch with Pick and Lock and was impressed by their efficiency. Fair pricing too.",
    "image": proImage,
    "rating": 5,
    "date": "2024-09-10"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "feedback": "Lost my office keys and was in a bind. The locksmith from Pick and Lock not only helped me get in but also gave some solid security advice. Truly top-notch service.",
    "image": proImage,
    "rating": 5,
    "date": "2024-09-12"
  },
  {
    "id": 5,
    "name": "Chris Lee",
    "feedback": "Had my purse stolen with my keys in it and was worried about security. Called up Pick and Lock, and they had my locks changed in no time. Really appreciate theirproImage",
    "image": proImage,
    "rating": 4,
    "date": "2024-09-15"
  },
  {
    "id": 6,
    "name": "Rahul Hawthorn",
    "feedback": "Lost my office keys and was in a bind. The locksmith from Pick and Lock not only helped me get in but also gave some solid security advice. Truly top-notch service.",
    "image": proImage,
    "rating": 5,
    "date": "2024-09-18"
  },
  {
    "id": 7,
    "name": "Rebecca St.Kilda",
    "feedback": "Had a jammed door late at night and thought I'd be stuck. Gave Pick and Lock a ring, and their locksmith sorted it out swiftly. Such a relief during a nerve-wracking time!",
    "image": proImage,
    "rating": 5,
    "date": "2024-09-20"
  }
];

const CarouselCard = () => {
  return (
    <div className="w-full flex flex-col items-center mb-20">
      <h2 className="text-center text-6xl font-bold mb-8 mt-8">
        Top Rated in Melbourne, Over 23,000+ Happy Clients.

      </h2>
      
      <div className="w-full">
        <CarouselPlugin dataCustom={customerData} />
      </div>
      <h3 className="text-center text-4xl font-bold mb-8 mt-8">Join the Happy Clients List. Call Now for a Free Estimate</h3>
      <a href="tel:0363582037" aria-label="Call Pick and Lock at (03) 6358 2037">
        <button className="w-fit bg-primary py-4 px-12 text-3xl rounded-full">
          (03) 6358 2037
        </button>
      </a>
    </div>
  );
};

export default CarouselCard;