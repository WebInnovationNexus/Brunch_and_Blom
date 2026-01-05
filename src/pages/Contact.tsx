import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, ArrowRight, Send, Check } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter signup
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-light tracking-brand uppercase mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground font-light max-w-xl mx-auto">
              We'd love to hear from you. Whether it's a question, collaboration, 
              or just to say hello.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <h2 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-6 text-muted-foreground">
                  Connect With Us
                </h2>
                
                <div className="space-y-6">
                  <a
                    href="https://instagram.com/brunchandblom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-foreground hover:text-muted-foreground transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-muted-foreground transition-colors duration-300">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-body font-light tracking-wide-brand uppercase text-muted-foreground">
                        Instagram
                      </p>
                      <p className="font-light">@brunchandblom</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@brunchandblom.co.za"
                    className="flex items-center gap-4 text-foreground hover:text-muted-foreground transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-muted-foreground transition-colors duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-body font-light tracking-wide-brand uppercase text-muted-foreground">
                        Email
                      </p>
                      <p className="font-light">hello@brunchandblom.co.za</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="border border-border p-8">
                <h3 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-4">
                  Stay In The Loop
                </h3>
                <p className="text-sm text-muted-foreground font-light mb-6">
                  Subscribe to be the first to know about upcoming events, 
                  exclusive access, and community updates.
                </p>
                
                {newsletterSubmitted ? (
                  <div className="flex items-center gap-2 text-foreground">
                    <Check size={18} />
                    <span className="font-light">Thank you for subscribing!</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 border border-border bg-transparent px-4 py-3 font-light text-sm focus:border-foreground focus:outline-none transition-colors duration-300"
                    />
                    <button
                      type="submit"
                      className="bg-foreground text-background p-3 transition-colors duration-300 hover:bg-muted-foreground"
                      aria-label="Subscribe"
                    >
                      <Send size={18} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xs font-body font-medium tracking-wide-brand uppercase mb-6 text-muted-foreground">
                Send A Message
              </h2>

              {contactSubmitted ? (
                <div className="border border-border p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4">
                    <Check size={24} />
                  </div>
                  <h3 className="font-display text-xl font-light mb-2">Message Sent</h3>
                  <p className="text-muted-foreground font-light text-sm">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-body font-light tracking-wide-brand uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3 font-light focus:border-foreground focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-light tracking-wide-brand uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3 font-light focus:border-foreground focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-body font-light tracking-wide-brand uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3 font-light focus:border-foreground focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-foreground text-background py-4 text-xs font-body font-light tracking-wide-brand uppercase transition-colors duration-300 hover:bg-muted-foreground"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center mt-24 py-16 border-t border-border">
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-brand uppercase mb-4">
              Ready To Join Us?
            </h2>
            <p className="text-muted-foreground font-light max-w-xl mx-auto mb-8">
              Secure your seat at our next curated brunch experience.
            </p>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs font-body font-light tracking-wide-brand uppercase transition-colors duration-300 hover:bg-muted-foreground"
            >
              View Upcoming Events
              <ArrowRight size={16} />
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
