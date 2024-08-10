export interface GetArticlesReponse {
  success: boolean;
  message: string;
  code: number;
  data: Article[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  featured_image: string;
  featured_image_caption: string;
  read_time: string;
}
