import React from 'react';

const itinerary = [
  {
    time: '06:00 pm',
    title: 'Ceremonia Religiosa',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8">
        <path d="M16 56V16h32v40" />
        <path d="M16 16l8 8m24-8l-8 8" />
        <circle cx="24" cy="24" r="3" />
        <circle cx="40" cy="24" r="3" />
    </svg>
    ),
  },
  {
    time: '07:00 pm',
    title: 'Cocktail',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5m0-7.5l-7.5 7.5M7.5 20.25h2.25m4.5 0h2.25" />
        </svg>
    ),
  },
  {
    time: '08:00 pm',
    title: 'Ceremonia Civil',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8">
  <circle cx="24" cy="32" r="10" />
  <circle cx="40" cy="32" r="10" />
  <path d="M27 27l10-10" />
</svg>
    ),
  },
  {
    time: '09:00 pm',
    title: 'Recepción',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" class="w-8 h-8">
  <circle cx="32" cy="32" r="10" />
  <rect x="14" y="20" width="2" height="24" />
  <rect x="48" y="20" width="2" height="24" />
</svg>
    ),
  },
];

export default function TestWeddingItinerary() {
  return (
    <div className="bg-[#f4e9d8] border-[12px] border-double border-[#d4bfa5] rounded-[30px] p-6 max-w-2xl mx-auto shadow-md font-elegant text-[#3f2f2f]">
      <h2 className="text-3xl font-elegant text-center mb-8">Itinerario</h2>
      <div className="space-y-6">
        {itinerary.map((item, index) => (
          <div key={index} className="flex items-center space-x-6">
            <div className="flex-shrink-0 text-[#6e4c3e]">{item.icon}</div>
            <div>
              <p className="text-xl font-semibold">{item.time}</p>
              <p className="text-lg">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}