export enum AppRoute {
  MainPage = '/',
  SignInScreen = '/login',
  FavoritesScreen = '/favorites',
  RoomScreen = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
