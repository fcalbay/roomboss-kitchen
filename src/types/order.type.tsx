const HAMBURGER = 'Hamburger';
const FRIES = 'Fries';
const RIBEYE_STEAK = 'Ribeye steak';
const CHICKEN_ALFREDO_FETTUCINE = 'Chicken Alfredo Fettucine';

export const MENU = [HAMBURGER, FRIES, RIBEYE_STEAK, CHICKEN_ALFREDO_FETTUCINE] as const;

export interface Order {
  id: string;
  item: (typeof MENU)[number];
  quantity: number;
  tableNo: string;
  notes?: string;
  createdAt: Date;
}

export interface CompletedOrder extends Order {
  completedOn: Date;
}
