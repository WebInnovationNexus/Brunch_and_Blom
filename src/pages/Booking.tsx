import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Calendar, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getEventById } from '@/data/events';

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const event = id ? getEventById(id) : undefined;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    tickets: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!event || event.status !== 'upcoming') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-32 pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-display text-4xl font-light mb-4">Event Unavailable</h1>
            <p className="text-muted-foreground font-light mb-8">
              This event is no longer available for booking.
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

  const totalAmount = event.price * formData.tickets;
  const maxTickets = Math.min(event.availableSeats, 10);

  const generateBookingRef = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `BB${timestamp}${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const ref = generateBookingRef();
    setBookingRef(ref);
    setIsComplete(true);
    setIsSubmitting(false);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-ZA', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  if (isComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-8">
              <Check size={32} />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-light mb-4">
              Booking Confirmed
            </h1>
            <p className="text-muted-foreground font-light mb-8">
              Thank you for your booking. We can't wait to see you!
            </p>

            <div className="border border-border p-8 mb-8 text-left">
              <div className="mb-6">
                <span className="text-xs font-body font-light tracking-wide-brand uppercase text-muted-foreground">
                  Booking Reference
                </span>
                <p className="font-display text-2xl font-light mt-1">{bookingRef}</p>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-muted-foreground font-light">Event</span>
                  <p className="font-light">{event.title}</p>
                </div>
                <div>
                  <span className="text-muted-foreground font-light">Date</span>
                  <p className="font-light">{formatDate(event.date)} at {event.time}</p>
                </div>
                <div>
                  <span className="text-muted-foreground font-light">Venue</span>
                  <p className="font-light">{event.venue}</p>
                </div>
                <div>
                  <span className="text-muted-foreground font-light">Tickets</span>
                  <p className="font-light">{formData.tickets} × R{event.price}</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <span className="text-muted-foreground font-light">Total Paid</span>
                  <p className="font-display text-2xl font-light">R{totalAmount}</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground font-light mb-8">
              A confirmation email has been sent to {formData.email}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 text-xs font-body font-light tracking-wide-brand uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                View More Events
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-body font-light tracking-wide-brand uppercase text-muted-foreground hover:text-foreground"
              >
                Return Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
            Back to Event
          </button>

          <h1 className="font-display text-4xl md:text-5xl font-light tracking-brand uppercase mb-12">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-body font-light tracking-wide-brand uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 font-light focus:border-foreground focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-light tracking-wide-brand uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 font-light focus:border-foreground focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-light tracking-wide-brand uppercase mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 font-light focus:border-foreground focus:outline-none transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-xs font-body font-light tracking-wide-brand uppercase mb-2">
                    Number of Tickets
                  </label>
                  <select
                    value={formData.tickets}
                    onChange={(e) => setFormData({ ...formData, tickets: parseInt(e.target.value) })}
                    className="w-full border border-border bg-transparent px-4 py-3 font-light focus:border-foreground focus:outline-none transition-colors duration-300"
                  >
                    {Array.from({ length: maxTickets }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'ticket' : 'tickets'}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="border border-border p-4 bg-secondary">
                  <p className="text-sm text-muted-foreground font-light">
                    <strong>Demo Mode:</strong> This is a simulated checkout. 
                    No actual payment will be processed.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background py-4 text-xs font-body font-light tracking-wide-brand uppercase transition-colors duration-300 hover:bg-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : `Pay R${totalAmount}`}
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <div className="border border-border p-8">
                <h2 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-6">
                  Order Summary
                </h2>

                <div className="mb-6">
                  <h3 className="font-display text-xl font-light mb-4">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground font-light">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{formatDate(event.date)} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mb-6">
                  <div className="flex justify-between text-sm font-light mb-2">
                    <span>{formData.tickets} × R{event.price}</span>
                    <span>R{totalAmount}</span>
                  </div>
                  <div className="flex justify-between font-display text-xl font-light pt-4 border-t border-border mt-4">
                    <span>Total</span>
                    <span>R{totalAmount}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {event.whatsIncluded.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                        <Check size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
