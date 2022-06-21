import { AddAccountModel } from '../../usecases/add-account/db-add-account-protocols'
import { AccountModel } from '../../../domain/models/account'

export interface AddAccountRepository {
  add: (accountData: AddAccountModel) => Promise<AccountModel>
}
