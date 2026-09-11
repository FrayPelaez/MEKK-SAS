export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  reference: string;
  image: string;
  description: string;

  features?: string[];
  technicalSheet?: string;

  technicalDescription?: string;

  specifications?: {
    headers: string[];
    rows: string[][];
  };

  faq?: {
    question: string;
    answer: string;
    points?: string[];
  }[];
}
