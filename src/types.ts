export interface MenuItem {
  id: string;
  name: string;
  description: string;
  sensoryDescription: string;
  price: number;
  image: string;
  crossSectionImage: string;
  category: string;
  calories: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}
