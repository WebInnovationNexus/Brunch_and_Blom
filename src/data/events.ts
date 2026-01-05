import springImg1 from "../assets/BB_Spring_exp4.png";
import springImg2 from "../assets/BB_Spring_exp1.png";
import springImg3 from "../assets/BB_Spring_exp2.png";
import springImg4 from "../assets/BB_Spring_exp3.png";
import soireeImg1 from "../assets/BB_soiree_1 (1).png";
import sioreeImg2 from "../assets/BB_soiree_2.png";
import soireeImg3 from "../assets/BB_soiree_3.png";
import soireeImg4 from "../assets/BB_soiree_4.png";
import thirdEvent1 from "../assets/BBModels (1).png";
import thirdEvent2 from "../assets/BBModels (2).png";
import thirdEvent3 from "../assets/BBModels (3).png";
import thirdEvent4 from "../assets/BBModels (4).png";


export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  shortDescription: string;
  price: number;
  totalSeats: number;
  availableSeats: number;
  imageUrl: string;
  galleryImages: string[];
  status: 'upcoming' | 'sold_out' | 'past';
  whatsIncluded: string[];
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Brunch & Blom Spring Experience',
    date: '2025-03-16',
    time: '11:00',
    venue: 'Potchefstroom',
    shortDescription: 'An intimate morning of curated flavors, soulful connections, and the gentle bloom of spring.',
    description: 'Join us for an unforgettable spring morning where every detail has been thoughtfully curated. From the moment you arrive, you\'ll be enveloped in an atmosphere of warmth and elegance. Indulge in bottomless premium beverages, savor a gourmet brunch menu crafted by talented local chefs, and connect with like-minded individuals who appreciate the finer things in life. This is more than brunch—it\'s an experience designed to nourish your soul and create lasting memories.',
    price: 450,
    totalSeats: 45,
    availableSeats: 32,
    imageUrl: springImg1,
    galleryImages: [
      springImg2,
      springImg3,
      springImg4
    ],
    status: 'upcoming',
    whatsIncluded: [
      'Bottomless premium beverages',
      'Gourmet brunch menu',
      'Curated music experience',
      'Connection activities',
      'Beautiful ambiance',
    ],
  },
  {
    id: '2',
    title: 'Summer Soirée',
    date: '2025-08-31',
    time: '12:00',
    venue: 'TBA - Potchefstroom Area',
    shortDescription: 'A sun-kissed afternoon of luxury dining, craft cocktails, and meaningful connections under the summer sky.',
    description: 'As the summer sun reaches its peak, we invite you to an outdoor celebration of life, love, and community. The Summer Soirée brings together the best of what Brunch & Bloom represents—exceptional food, curated drinks, and the kind of atmosphere where strangers become friends. Set against a stunning outdoor backdrop, this event promises to be the highlight of your summer. Limited seats ensure an intimate experience where every guest feels valued.',
    price: 500,
    totalSeats: 60,
    availableSeats: 60,
    imageUrl: soireeImg4,
    galleryImages: [
      soireeImg3,
      soireeImg1,
      sioreeImg2,
    ],
    status: 'upcoming',
    whatsIncluded: [
      'Bottomless cocktails & mocktails',
      'Summer-inspired gourmet menu',
      'Live music performance',
      'Outdoor luxury setting',
      'Exclusive community experience',
    ],
  },
  {
    id: '3',
    title: 'Fashion Shoot Edition',
    date: '2024-07-14',
    time: '10:30',
    venue: 'The Chrsti Venue, Potchefstroom',
    shortDescription: 'A cozy afternoon filled with comfort food, warm drinks, and heartfelt conversations.',
    description: 'Our Fashion Shoot Edition was a celebration of our smart casual attires. Guests enjoyed hearty comfort food, artisanal hot beverages, free photoshoot, and the warmth of genuine human connection. The intimate setting created the perfect backdrop for new friendships to blossom.',
    price: 400,
    totalSeats: 40,
    availableSeats: 0,
    imageUrl: thirdEvent1,
    galleryImages: [
      thirdEvent2,
      thirdEvent3,
      thirdEvent4,
    ],
    status: 'past',
    whatsIncluded: [
      'Bunny & Fries Kota',
      'Free photoshoot',
      'Acoustic live music',
      'Cozy indoor setting',
      'Community connection activities',
    ],
  },
];

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

export const getUpcomingEvents = (): Event[] => {
  return events.filter(event => event.status === 'upcoming');
};

export const getPastEvents = (): Event[] => {
  return events.filter(event => event.status === 'past');
};
