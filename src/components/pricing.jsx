'use client';

import { ChevronDown } from 'lucide-react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@radix-ui/react-select';

export default function Pricing() {
  return (
    <section className="bg-[#FF5C2A] rounded-[32px] p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/50 to-transparent" />

      {/* Header */}
      <div className="relative flex justify-between items-start mb-20">
        <Select>
          <SelectTrigger className="w-[200px] bg-white text-black border-none">
            <SelectValue placeholder="Personal Training" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">Personal Training</SelectItem>
            <SelectItem value="group">Group Training</SelectItem>
            <SelectItem value="online">Online Coaching</SelectItem>
          </SelectContent>
        </Select>

        <div className="text-right text-white">
          <p className="text-2xl mb-2">PRICING PLAN</p>
          <h2 className="text-6xl font-black tracking-tight">JOIN TODAY</h2>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* One Day Pass */}
        <div className="bg-orange-400/20 backdrop-blur-sm rounded-[32px] p-8 text-white border border-white/20">
          <div className="w-8 h-8 rounded-full border-2 border-white mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            ONE DAY
            <br />
            PASS
          </h3>
          <div className="text-2xl font-bold mb-6">
            $15<span className="text-xl font-normal">/Per Day</span>
          </div>
          <p className="text-white/90">
            Whether you're visiting F7 on business or are just taking your
            personal fitness one day at a time, we'd like to invite you to
            experience all that F7 has to offer. You are always Welcome!
          </p>
        </div>

        {/* Monthly Pass */}
        <div className="bg-white rounded-[32px] p-8">
          <div className="w-8 h-8 rounded-full border-2 border-orange-500 mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            MONTHLY
            <br />
            PASS
          </h3>
          <div className="text-2xl font-bold mb-6">
            $90<span className="text-xl font-normal">/Per month</span>
          </div>
          <p className="text-gray-600">
            Our monthly membership helps you to keep your fitness goals on track
            without a commitment of any kind, while still enjoying all of the
            amenities that F7 has to offer.
          </p>
        </div>

        {/* Yearly Pass */}
        <div className="bg-orange-400/20 backdrop-blur-sm rounded-[32px] p-8 text-white border border-white/20">
          <div className="w-8 h-8 rounded-full border-2 border-white mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            YEARLY
            <br />
            PASS
          </h3>
          <div className="text-2xl font-bold mb-6">
            $59<span className="text-xl font-normal">/Per month</span>
          </div>
          <p className="text-white/90">
            With a 1-year commitment, we offer a monthly membership for only
            $59. When you pre-purchase a complete year individual membership you
            get 2/m Free Extention.
          </p>
        </div>
      </div>

      {/* Order Button */}
      <div className="relative flex justify-end mt-8">
        <button className="bg-white text-black hover:bg-white/90" size="lg">
          Order Now
        </button>
      </div>
    </section>
  );
}
