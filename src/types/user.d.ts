interface User {
  id: number;
  nickname: string;
  email: string;
  avatar: string;
  gender: string;
  createAt: string;
  updateAt: string;
  birthday: string;
  website: string;
  introduction: string;
  favoriteTags: Array<TagModel>;
}

interface UserUpdate {
  avatar?: string;
  nickname?: string;
  gender?: string;
  birthday?: string;
  website?: string;
  introduction?: string;
}

interface FavoriteTags {
  favoriteTags: Array<TagModel>;
}
