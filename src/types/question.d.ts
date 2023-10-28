interface QuestionModel {
  id: number;
  title: string;
  content: string;
  createAt: string;
  updateAt: string;
  userId: number;
}

interface Pagination<T> {
  data: T[];
  meta: {
    page: number;
    pageCount: number;
    total: number;
  };
}
