export interface CertificateImage {
  front: string;
  back?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: Date;
  image: string | CertificateImage;
  logo?: string;
  category?: 'certification' | 'training';
}

export interface CertificateCategory {
  name: string;
  certificates: Certificate[];
}
