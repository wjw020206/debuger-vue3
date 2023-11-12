interface TagModel {
  id: number;
  title: string;
  content: string;
  questions: Array<{ id: string }>;
}
