export default interface CreateClassDTO {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: {
    week_day: number;
    from: string;
    to: string;
  };
}
