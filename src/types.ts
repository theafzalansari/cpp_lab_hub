export type Category =
  | 'All'
  | 'Operator Overloading'
  | 'Searching & Sorting'
  | 'Singly Linked List'
  | 'Doubly Linked List'
  | 'Stack'
  | 'Queue'
  | 'Binary Search Tree';

export interface PracticalProgram {
  id: number;
  chitNumber: number;
  title: string;
  category: Category;
  note?: string;
  code: string;
  sampleResult: string;
  vivaNote: string;
  filename: string;
}
