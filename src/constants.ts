import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Pistachio Croissant',
    description: 'Our award-winning 72-hour fermented dough filled with house-made bronte pistachio cream.',
    sensoryDescription: 'Shatter-crisp layers meet a velvety, nutty heart. Infused with a hint of sea salt.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    crossSectionImage: 'https://images.unsplash.com/photo-1549590143-fd5843abd06e?q=80&w=800&auto=format&fit=crop',
    category: 'Viennoiserie',
    calories: '420 kcal'
  },
  {
    id: '2',
    name: 'Seasonal Wild Berry Tart',
    description: 'Madagascar vanilla bean diplomat cream topped with hand-picked seasonal wild berries.',
    sensoryDescription: 'A delicate snap of shortbread with a rush of cool, tart berry juices and cloud-like cream.',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=800&auto=format&fit=crop',
    crossSectionImage: 'https://images.unsplash.com/photo-1464305795204-6f5bbee74816?q=80&w=800&auto=format&fit=crop',
    category: 'Patisserie',
    calories: '310 kcal'
  },
  {
    id: '3',
    name: 'Dark Chocolate Pain au Chocolat',
    description: 'Double-stuffed with 70% Valrhona dark chocolate and a touch of hazelnut praline.',
    sensoryDescription: 'Deep, bitter-sweet molten core balanced by a buttery, smoke-touched crust.',
    price: 5.75,
    image: 'https://images.unsplash.com/photo-1549413284-82a15c328e67?q=80&w=800&auto=format&fit=crop',
    crossSectionImage: 'https://images.unsplash.com/photo-1621235122706-932599723382?q=80&w=800&auto=format&fit=crop',
    category: 'Viennoiserie',
    calories: '380 kcal'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Julianne V.',
    role: 'Gastronomy Critic',
    content: 'The Pistachio Croissant is not just a pastry; it is a structural masterpiece. The tension in the crust is unparalleled.',
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Chen',
    role: 'Local Artisan',
    content: 'I come here every morning for the smell alone. The fact that the taste exceeds the fragrance is a miracle of baking.',
    rating: 5
  },
  {
    id: '3',
    name: 'Elena Rossi',
    role: 'Chef de Cuisine',
    content: 'Mogut understands the science of the bake. Precise, soulful, and consistently perfect.',
    rating: 5
  }
];

export const APP_CONFIG = {
  scarcityMessage: 'Fresh batches out at 8 AM. Limited daily quantities.',
  heroHeadline: 'Mogut: The Art of the Daily Bake',
  heroSubheadline: 'Experience the intersection of architectural precision and artisanal warmth.',
  preOrderSuccess: 'Your reservation is secured. See you at the bakery.'
};
