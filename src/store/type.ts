export interface IRootState {
  user: object
  sex: string
}

export interface IRootWithModule {
  // login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
