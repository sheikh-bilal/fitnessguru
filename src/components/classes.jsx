import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Classes() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Headings */}
        <div className="mb-16">
          <h2 className="text-[2rem] text-gray-600 mb-2">CLASSES DESIGNED</h2>
          <h3 className="text-[4rem] font-black tracking-tight leading-none">
            FOR YOU
          </h3>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Personal Training */}
          <div className="lg:col-span-4">
            <div className="relative group">
              <div className="rounded-[32px] overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Personal Training"
                  width={300}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h4 className="text-xl">Personal Training</h4>
                <Link
                  to="#"
                  className="w-12 h-12 bg-[#FF5C2A] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Outdoor Classes */}
          <div className="lg:col-span-4">
            <div className="relative group">
              <div className="rounded-[32px] overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Outdoor Classes"
                  width={300}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h4 className="text-xl">Outdoor Classes</h4>
                <Link
                  to="#"
                  className="w-12 h-12 bg-[#FF5C2A] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Digital Coaching */}
          <div className="lg:col-span-4">
            <div className="relative group">
              <div className="rounded-[32px] overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=300"
                  alt="Digital Coaching"
                  width={300}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h4 className="text-xl">Digital Coaching</h4>
                <Link
                  to="#"
                  className="w-12 h-12 bg-[#FF5C2A] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Group Training */}
          <div className="lg:col-span-12">
            <div className="relative group">
              <div className="rounded-[32px] overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=1200"
                  alt="Group Training"
                  width={1200}
                  height={300}
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h4 className="text-xl">Group Training</h4>
                <Link
                  to="#"
                  className="w-12 h-12 bg-[#FF5C2A] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
