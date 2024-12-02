import { PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-6xl font-bold mb-6">
              NO PAIN
              <br />
              NO GAIN
            </h1>
            <p className="text-gray-600 mb-8 max-w-md">
              We believe that fitness is not just a destination but a way of
              life. Our expert trainers are here to help you achieve your
              fitness goals and transform your life.
            </p>
            <div className="flex space-x-4 mb-8">
              <button className="bg-orange-500 hover:bg-orange-600 text-white">
                Learn More
              </button>
              <button
                variant="outline"
                className="text-orange-500 border-orange-500"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch Video
              </button>
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="text-4xl font-bold">15</div>
                <div className="text-gray-600">Expert Trainers</div>
              </div>
              <img
                src="/placeholder.svg?height=60&width=60"
                height={60}
                width={60}
                alt="Dumbbell icon"
                className="mr-4"
              />
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="/placeholder.svg?height=500&width=500"
              height={500}
              width={500}
              alt="Fitness model"
              className="rounded-3xl"
            />
            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-xl shadow-lg">
              <img
                src="/placeholder.svg?height=80&width=120"
                height={80}
                width={120}
                alt="Video thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
