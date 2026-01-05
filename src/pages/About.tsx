import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Sparkles, Crown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import aboutImg from "../assets/BB_Spring_exp4.png"
import expImg from "../assets/BB_soiree_3.png"

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Community',
      description: 'We believe in the power of bringing people together around a shared table.',
    },
    {
      icon: Sparkles,
      title: 'Culture',
      description: 'Every detail is curated to create an atmosphere of refined celebration.',
    },
    {
      icon: Heart,
      title: 'Connection',
      description: 'Beyond networking—we foster genuine friendships and meaningful bonds.',
    },
    {
      icon: Crown,
      title: 'Luxury',
      description: 'Premium experiences accessible to those who appreciate the finer things.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-light tracking-brand uppercase mb-4">
              About Us
            </h1>
            <p className="text-muted-foreground font-light max-w-xl mx-auto">
              The story behind every gathering, every plate, and every connection.
            </p>
          </div>

          {/* Our Story Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-6 text-muted-foreground">
                Our Story
              </h2>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-6">
                Where It All Began
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Brunch & Blom was born from a simple desire: to create spaces where 
                meaningful connections could flourish over exceptional food and drinks. 
                What started as intimate gatherings among friends has blossomed into a 
                community of like-minded individuals who share a passion for life's 
                finer experiences.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                We believe that the best conversations happen around a beautifully set 
                table, with carefully crafted cocktails in hand and soulful music in the 
                air. Each Brunch & Bloom experience is designed to slow down time and 
                create memories that last long after the last glass is raised.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={aboutImg}
                alt="Brunch & Blom community gathering"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-4 text-muted-foreground">
                What We Stand For
              </h2>
              <h3 className="font-display text-3xl md:text-4xl font-light">
                Our Core Values
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center p-8 border border-border">
                  <value.icon size={32} className="mx-auto mb-4 text-foreground" strokeWidth={1} />
                  <h4 className="font-display text-xl font-light mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Experience Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 aspect-[4/5] overflow-hidden">
              <img
                src={expImg}
                alt="Curated table setting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-6 text-muted-foreground">
                The Experience
              </h2>
              <h3 className="font-display text-3xl md:text-4xl font-light mb-6">
                What To Expect
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                From the moment you arrive, you'll be enveloped in an atmosphere of 
                warmth and sophistication. Our venues are carefully selected, our menus 
                thoughtfully crafted, and our playlists curated to set the perfect mood.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Expect bottomless premium beverages, from signature cocktails to artisan 
                mocktails. Savor gourmet brunch dishes prepared by talented local chefs. 
                Engage in connection activities designed to break the ice and foster 
                genuine conversations.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                But most importantly, expect to leave with new friends, beautiful 
                memories, and a renewed sense of community.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-secondary py-16 px-6">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-brand uppercase mb-4">
              Join The Bloom Family
            </h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto mb-8">
              Be part of a community that celebrates life's beautiful moments together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/events"
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs font-body font-light tracking-wide-brand uppercase transition-colors duration-300 hover:bg-muted-foreground"
              >
                See Upcoming Events
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-foreground text-foreground px-8 py-4 text-xs font-body font-light tracking-wide-brand uppercase transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                Get In Touch
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
