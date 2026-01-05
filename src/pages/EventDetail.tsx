import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Check, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getEventById } from '@/data/events';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = id ? getEventById(id) : undefined;

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-32 pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-4xl font-light mb-4">Event Not Found</h1>
            <p className="text-muted-foreground font-light mb-8">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-xs font-body font-light tracking-wide-brand uppercase border-b border-foreground pb-1"
            >
              <ArrowLeft size={14} />
              Back to Events
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-ZA', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const isPast = event.status === 'past';
  const isSoldOut = event.status === 'sold_out';
  const lowInventory = event.availableSeats <= 10 && event.availableSeats > 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-body font-light tracking-wide-brand uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={14} />
            Back to Events
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div>
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {event.galleryImages.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {event.galleryImages.slice(0, 3).map((img, index) => (
                    <div key={index} className="aspect-square overflow-hidden">
                      <img
                        src={img}
                        alt={`${event.title} gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-light mb-6">
                {event.title}
              </h1>

              <div className="flex flex-col gap-3 mb-8 text-muted-foreground font-light">
                <div className="flex items-center gap-3">
                  <Calendar size={18} />
                  <span>{formatDate(event.date)} at {event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>{event.venue}</span>
                </div>
                {!isPast && (
                  <div className="flex items-center gap-3">
                    <Users size={18} />
                    <span>{event.availableSeats} of {event.totalSeats} seats available</span>
                  </div>
                )}
              </div>

              {/* About Section */}
              <div className="mb-8">
                <h2 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-4">
                  About This Event
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* What's Included */}
              <div className="mb-8">
                <h2 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-4">
                  What's Included
                </h2>
                <ul className="space-y-2">
                  {event.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground font-light">
                      <Check size={16} className="text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & CTA */}
              <div className="border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-body font-light tracking-wide-brand uppercase text-muted-foreground">
                    Price per person
                  </span>
                  <span className="font-display text-3xl font-light">
                    R{event.price}
                  </span>
                </div>

                {lowInventory && !isPast && !isSoldOut && (
                  <div className="flex items-center gap-2 text-sm text-amber-600 mb-4">
                    <AlertCircle size={16} />
                    <span className="font-light">Only {event.availableSeats} seats left!</span>
                  </div>
                )}

                {isPast ? (
                  <button
                    disabled
                    className="w-full bg-muted text-muted-foreground py-4 text-xs font-body font-light tracking-wide-brand uppercase cursor-not-allowed"
                  >
                    Event Has Passed
                  </button>
                ) : isSoldOut ? (
                  <button
                    disabled
                    className="w-full bg-muted text-muted-foreground py-4 text-xs font-body font-light tracking-wide-brand uppercase cursor-not-allowed"
                  >
                    Sold Out
                  </button>
                ) : (
                  <Link
                    to={`/booking/${event.id}`}
                    className="block w-full bg-foreground text-background py-4 text-xs font-body font-light tracking-wide-brand uppercase text-center transition-colors duration-300 hover:bg-muted-foreground"
                  >
                    Book Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetail;
