export class Answer {
  id: string;
  qid: string;
  content: string;
  writer: string;
  writerId: string;
  grade: number;
  verified: boolean;
  setSyntaxMatchFound: boolean;
  createdAt: Date;
}
