class MainRoutes {
  main = () => '/';
  mail = () => '/mail';
  support = () => '/support';
  search = () => '/search';
  new = () => '/new';
  saved = () => '/saved';
}

class ProfilesRoutes {
  constructor(protected path = '/profiles') {}
  profileId = (id: string) => `${this.path}/${id}`;
  profileIdClubs = (id: string) => `${this.path}/${id}/clubs`;
  profileIdGallery = (id: string) => `${this.path}/${id}/gallery`;
  profileIdFollowing = (id: string) => `${this.path}/${id}/following`;
}

class UsersRoutes {
  constructor(protected path = '/users') {}
  users = () => this.path;
}

class PostsRoutes {
  constructor(protected path = '/posts') {}
  postId = (id: string) => `${this.path}/${id}`;
}

class GalleriesRoutes {
  constructor(protected path = '/galleries') {}
  galleryId = (id: string) => `${this.path}/${id}`;
}

class AuthRoutes {
  constructor(protected path = '/auth') {}
  signIn = () => `${this.path}/sign-in`;
  signUp = () => `${this.path}/sign-up`;
  passReset = () => `${this.path}/password-reset`;
  passdResetId = (id: string) => `${this.path}/password-reset/${id}`;
  passResetIdFault = (id: string) => `${this.path}/password-reset/${id}/fault`;
  passResetIdNew = (id: string) =>
    `${this.path}/password-reset/${id}/new-password`;
}

class SettingsRoutes {
  constructor(protected path = '/settings') {}
  profile = () => `${this.path}/profile`;
  account = () => `${this.path}/account`;
  password = () => `${this.path}/password`;
  appearance = () => `${this.path}/appearance`;
}

class ClubsRoutes {
  constructor(protected path = '/clubs') {}
  clubs = () => this.path;
  create = () => `${this.path}/create`;
  clubId = (id: string) => `${this.path}/${id}`;
  clubIdMembers = (id: string) => `${this.path}/${id}/members`;
  clubIdSettings = (id: string) => `${this.path}/${id}/settings`;
}

class ContestsRoutes {
  constructor(protected path = '/contests') {}
  contests = () => this.path;
  contestId = (id: string) => `${this.path}/${id}`;
}

class AdminRoutes {
  constructor(protected path = '/admin') {}
  dashboard = () => `${this.path}/dashboard`;
  users = () => `${this.path}/users`;
  userId = (id: string) => `${this.path}/users/${id}`;
  categories = () => `${this.path}/categories`;
  posts = () => `${this.path}/posts`;
  images = () => `${this.path}/images`;
  contests = () => `${this.path}/contests`;
  clubs = () => `${this.path}/clubs`;
  mail = () => `${this.path}/mail`;
  reports = () => `${this.path}/reports`;
  reportId = (id: string) => `${this.path}/reports/${id}`;
  notifications = () => `${this.path}/notifications`;
}

export const mainRoutes = new MainRoutes();
export const authRoutes = new AuthRoutes();
export const postsRoutes = new PostsRoutes();
export const usersRoutes = new UsersRoutes();
export const adminRoutes = new AdminRoutes();
export const clubsRoutes = new ClubsRoutes();
export const profilesRoutes = new ProfilesRoutes();
export const contestsRoutes = new ContestsRoutes();
export const settingsRoutes = new SettingsRoutes();
export const galleriesRoutes = new GalleriesRoutes();
