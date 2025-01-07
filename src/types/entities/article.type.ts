export type Article = {
  id: string;
  title: string;
  image: string;
  isPublished: string;
  articleHtml: string;
  articleMarkdown: string;
  likedBy: string[];
  viwedCount: number;
  createdAt: string;
  updatedAt: string;
};

export type ArticleCreate = Pick<
  Article,
  'articleMarkdown' | 'isPublished' | 'title'
>;

export type ArticleUpdate = Partial<ArticleCreate>;
