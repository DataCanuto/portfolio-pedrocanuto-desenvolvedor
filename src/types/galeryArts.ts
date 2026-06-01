export type ArtCategory = 'telas' | 'aerografias' | 'desenhos' | 'dobraduras' | 'camisetas';

export interface Artwork {
  id: number;
  title: string;
  category: ArtCategory;
  technique: string;
  dimensions?: string;
  year: number;
  price: number;
  image: string;
  status: 'disponível' | 'vendido';
  description?: string;
}

export interface CategoryInfo {
  key: ArtCategory;
  icon: string;
  name: string;
  description: string;
  count: number;
}
