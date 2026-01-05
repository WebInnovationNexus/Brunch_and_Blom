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

export interface GalleryImage {
  id: string;
  eventTitle: string;
  imageUrl: string;
  caption: string;
  displayOrder: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    eventTitle: 'Spring Experience 2024',
    imageUrl: springImg1,
    caption: 'Friends gathering around the table',
    displayOrder: 1,
  },
  {
    id: '2',
    eventTitle: 'Spring Experience 2024',
    imageUrl: springImg2,
    caption: 'Moments of connection',
    displayOrder: 2,
  },
  {
    id: '3',
    eventTitle: 'Summer Soirée 2024',
    imageUrl: soireeImg1,
    caption: 'Curated table settings',
    displayOrder: 3,
  },
  {
    id: '4',
    eventTitle: 'Summer Soirée 2024',
    imageUrl: sioreeImg2,
    caption: 'Celebrating together',
    displayOrder: 4,
  },
  {
    id: '5',
    eventTitle: 'Fashion Shoot 2024',
    imageUrl: thirdEvent1,
    caption: 'Golden hour moments',
    displayOrder: 5,
  },
  {
    id: '6',
    eventTitle: 'Fashion Shoot 2024',
    imageUrl: thirdEvent2,
    caption: 'Intimate conversations',
    displayOrder: 6,
  },
  {
    id: '7',
    eventTitle: 'Autumn Gathering 2024',
    imageUrl: thirdEvent4,
    caption: 'Community in bloom',
    displayOrder: 7,
  },
  {
    id: '8',
    eventTitle: 'Autumn Gathering 2024',
    imageUrl: soireeImg4,
    caption: 'Shared laughter',
    displayOrder: 8,
  },
];
