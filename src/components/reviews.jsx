'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Emily H.',
    text: "I've been a member of MURA for over a year, and I can't imagine my fitness routine without it. The group classes are my favorite they're challenging, fun, and led by enthusiastic instructors.",
    image: '/placeholder.svg?height=120&width=120',
  },
  {
    id: 2,
    name: 'Alexandra T.',
    text: 'Joining MURA was the best decision I made for my fitness journey. The trainers are so supportive and knowledgeable. The community here is incredible, making every workout enjoyable.',
    image: '/placeholder.svg?height=120&width=120',
  },
  // Additional reviews for the circular display
  {
    id: 3,
    name: 'Michael R.',
    image: '/placeholder.svg?height=120&width=120',
  },
  {
    id: 4,
    name: 'Sarah L.',
    image: '/placeholder.svg?height=120&width=120',
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % 2);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + 2) % 2);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-2">REVIEWS</h2>
          <h3 className="text-[4rem] font-black tracking-tight leading-none">
            FROM YOU
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Circular Profile Images */}
          <div className="relative w-[300px] h-[300px] flex-shrink-0 hidden lg:block">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="absolute w-[120px] h-[120px]"
                style={{
                  top:
                    index === 0
                      ? '0'
                      : index === 1
                      ? '0'
                      : index === 2
                      ? '180px'
                      : '180px',
                  left:
                    index === 0
                      ? '0'
                      : index === 1
                      ? '180px'
                      : index === 2
                      ? '0'
                      : '180px',
                }}
              >
                <img
                  src={review.image}
                  alt={review.name}
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Reviews Slider */}
          <div className="flex-1">
            <div className="relative bg-white rounded-3xl p-8 shadow-sm">
              <div className="absolute -right-4 top-8">
                <svg
                  width="40"
                  height="32"
                  viewBox="0 0 40 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9137 0L0 12.9137V31.0863H18.1726L31.0863 18.1726V0H12.9137Z"
                    fill="#FF5C2A"
                  />
                </svg>
              </div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-1 rounded-full border border-gray-200 text-sm font-medium">
                  {reviews[activeIndex].name}
                </span>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {reviews[activeIndex].text}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={prevReview}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
