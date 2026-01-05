import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { getUpcomingEvents } from '@/data/events';
import communityImg from "../assets/BB_soiree_4.png"

const Home = () => {
  const upcomingEvents = getUpcomingEvents().slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-background/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-brand uppercase mb-6 animate-fade-in">
            Brunch & Blom
          </h1>
          <p className="text-sm md:text-base font-body font-light tracking-wide-brand uppercase text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Drinks · Food · People · Music
          </p>
          <p className="max-w-xl mx-auto text-muted-foreground font-light leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Join us at the table for curated experiences of delicious food, 
            premium sips, soulful music, and meaningful connections.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs font-body font-light tracking-wide-brand uppercase transition-colors duration-300 hover:bg-muted-foreground"
            >
              See Upcoming Events
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 text-xs font-body font-light tracking-wide-brand uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-brand uppercase mb-4">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground font-light">
              Secure your seat at our next curated experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {upcomingEvents.length === 0 && (
            <p className="text-center text-muted-foreground font-light">
              New events coming soon. Follow us on Instagram for updates.
            </p>
          )}

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-xs font-body font-light tracking-wide-brand uppercase border-b border-foreground pb-1 transition-colors duration-300 hover:text-muted-foreground hover:border-muted-foreground"
            >
              View All Events
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-brand uppercase mb-6">
                More Than Brunch
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Brunch & Blom is where strangers become friends over shared plates 
                and clinking glasses. We curate every detail, from the music that 
                fills the air to the flavors on your plate, to create moments of 
                genuine connection.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                Join our growing community of food lovers, music enthusiasts, and 
                influencers. Every event is an invitation to blom aka chill.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-body font-light tracking-wide-brand uppercase border-b border-foreground pb-1 transition-colors duration-300 hover:text-muted-foreground hover:border-muted-foreground"
              >
                Learn More About Us
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={communityImg}
                alt="Community gathering at Brunch & Blom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
