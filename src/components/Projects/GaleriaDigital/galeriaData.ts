import { Artwork, CategoryInfo } from '@/types/galeryArts';

export const artworks: Artwork[] = [
  // Telas (primeiros 4)
  { id: 1, title: 'PORTAS E JANELAS 1', category: 'telas', technique: 'ACRÍLICA SOBRE TELA', year: 2018, price: 6000, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_001.jpg', status: 'disponível' },
  { id: 2, title: 'PORTAS E JANELAS 2', category: 'telas', technique: 'ACRÍLICA SOBRE TELA', year: 2021, price: 8400, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_002.jpg', status: 'disponível' },
  { id: 3, title: 'PORTAS E JANELAS 3', category: 'telas', technique: 'ACRÍLICA SOBRE TELA', year: 2025, price: 3860, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_003.jpg', status: 'disponível' },
  { id: 4, title: 'PORTAS E JANELAS 4', category: 'telas', technique: 'ACRÍLICA SOBRE TELA', year: 2024, price: 3500, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_004.jpg', status: 'disponível' },
  
  // Desenhos (primeiros 4)
  { id: 16, title: 'MAN 1', category: 'desenhos', technique: 'NANQUIM SOBRE PAPEL', year: 1988, price: 450, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_016.jpg', status: 'disponível' },
  { id: 17, title: 'MAN 2', category: 'desenhos', technique: 'NANQUIM SOBRE PAPEL', year: 1988, price: 450, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_017.jpg', status: 'disponível' },
  { id: 18, title: 'MAN 3', category: 'desenhos', technique: 'NANQUIM SOBRE PAPEL', year: 1988, price: 450, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_018.jpg', status: 'disponível' },
  { id: 19, title: 'U2', category: 'desenhos', technique: 'NANQUIM SOBRE PAPEL', year: 1988, price: 450, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_019.jpg', status: 'disponível' },
  
  // Dobraduras (primeiros 4)
  { id: 41, title: 'BIKE 1', category: 'dobraduras', technique: 'FIO DE COBRE', year: 2024, price: 250, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_041.jpg', status: 'disponível' },
  { id: 42, title: 'CAPOEIRA 1', category: 'dobraduras', technique: 'FIO DE COBRE', year: 2020, price: 250, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_042.jpg', status: 'disponível' },
  { id: 43, title: 'CAPOEIRA 2', category: 'dobraduras', technique: 'FIO DE COBRE', year: 2025, price: 250, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_043.jpg', status: 'disponível' },
  { id: 44, title: 'DANÇA 1', category: 'dobraduras', technique: 'FIO DE COBRE', year: 2022, price: 250, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_044.jpg', status: 'disponível' },
  
  // Camisetas (primeiros 4)
  { id: 50, title: 'PORTAS E JANELAS 1', category: 'camisetas', technique: 'ACRÍLICA SOBRE TECIDO', year: 2025, price: 150, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_050.jpeg', status: 'disponível' },
  { id: 51, title: 'PORTAS E JANELAS 2', category: 'camisetas', technique: 'ACRÍLICA SOBRE TECIDO', year: 2025, price: 150, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_051.jpeg', status: 'disponível' },
  { id: 52, title: 'PORTAS E JANELAS 3', category: 'camisetas', technique: 'ACRÍLICA SOBRE TECIDO', year: 2025, price: 150, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_052.jpeg', status: 'disponível' },
  { id: 53, title: 'PORTAS E JANELAS BIKE', category: 'camisetas', technique: 'ACRÍLICA SOBRE TECIDO', year: 2025, price: 150, image: 'https://raw.githubusercontent.com/DataCanuto/galeria-digital-artes/main/assets/img_novo/img_053.jpeg', status: 'disponível' },
];

export const categories: CategoryInfo[] = [
  { key: 'telas', icon: '🎨', name: 'Telas', description: 'Obras em acrílica sobre tela', count: 15 },
  { key: 'aerografias', icon: '💨', name: 'Aerografias', description: 'Técnica de pintura inovadora', count: 15 },
  { key: 'desenhos', icon: '✏️', name: 'Desenhos & Aquarelas', description: 'Série Mergulhos', count: 10 },
  { key: 'dobraduras', icon: '🔧', name: 'Dobraduras em Fio de Cobre', description: 'Esculturas miniaturizadas', count: 10 },
  { key: 'camisetas', icon: '👕', name: 'Camisetas & Diversos', description: 'Arte vestível', count: 8 },
];
