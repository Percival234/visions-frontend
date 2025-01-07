export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type CategoryCreate = Pick<Category, 'name' | 'description'>;
export type CategoryUpdate = Partial<CategoryCreate>;
