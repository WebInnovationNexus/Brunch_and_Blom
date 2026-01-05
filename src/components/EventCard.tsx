import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '@/data/events';

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const isPast = event.status === 'past';
  const isSoldOut = event.status === 'sold_out';

  return (
    <article className="group border border-border bg-card transition-all duration-500 hover:border-muted-foreground">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {isPast && (
          <div className="absolute top-4 right-4">
            <span className="text-xs font-body font-light tracking-wide-brand uppercase bg-muted-foreground text-background px-3 py-1">
              Past Event
            </span>
          </div>
        )}
        {isSoldOut && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="text-xl font-display font-light tracking-brand text-background uppercase">
              Sold Out
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-light mb-4 leading-tight">
          {event.title}
        </h3>

        <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground font-light">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{formatDate(event.date)} · {event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>{event.venue}</span>
          </div>
          {!isPast && (
            <div className="flex items-center gap-2">
              <Users size={14} />
              <span>{event.availableSeats} seats available</span>
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
          {event.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-display font-light">
            R{event.price}
          </span>
          <Link
            to={`/events/${event.id}`}
            className="text-xs font-body font-light tracking-wide-brand uppercase border-b border-foreground pb-1 transition-colors duration-300 hover:text-muted-foreground hover:border-muted-foreground"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
