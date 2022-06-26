import { AddAccountModel } from '../../../usecases/authentication/db-authentication-protocols'
import { AccountModel } from '../../../usecases/authentication/db-authentication-protocols'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
