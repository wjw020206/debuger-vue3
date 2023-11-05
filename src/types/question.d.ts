interface QuestionModel {
  id: number;
  title: string;
  content: string;
  createAt: string;
  updateAt: string;
  userId: number;
  vote: number;
  answerCount: number;
  read: number;
  tags: TagModel[];
}

interface Pagination<T> {
  data: T[];
  meta: {
    page: number;
    pageCount: number;
    total: number;
  };
}
