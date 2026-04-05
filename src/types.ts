export interface Product {
  id: string;
  name: string;
  image?: string;
  status: 'active' | 'draft';
  inventory: string;
  category: string;
  channels: number;
}
