import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { events, getUpcomingEvents, getPastEvents } from '@/data/events';

type FilterType = 'all' | 'upcoming' | 'past';

const Events = () => {
  const [filter, setFilter] = useState<FilterType>('upcoming');

  const getFilteredEvents = () => {
    switch (filter) {
      case 'upcoming':
        return getUpcomingEvents();
      case 'past':
        return getPastEvents();
      default:
        return events;
    }
  };

  const filteredEvents = getFilteredEvents();

  const filterButtons: { value: FilterType; label: string }[] = [
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'past', label: 'Past Events' },
    { value: 'all', label: 'All' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl font-light tracking-brand uppercase mb-4">
              Events
            </h1>
            <p className="text-muted-foreground font-light max-w-xl mx-auto">
              Discover our curated brunch experiences. Each event is thoughtfully 
              designed to bring people together.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-6 py-2 text-xs font-body font-light tracking-wide-brand uppercase transition-colors duration-300 ${
                  filter === btn.value
                    ? 'bg-foreground text-background'
                    : 'border border-border hover:border-foreground'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <p className="text-center text-muted-foreground font-light py-12">
              No events found. Check back soon for updates.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
