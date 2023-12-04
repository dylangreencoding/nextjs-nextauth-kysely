import { db } from './database'
import { UserSelectable, UserInsertable, UserUpdateable} from './types'



export async function createUser(user: UserInsertable) {
  return await db.insertInto('users')
    .values(user)
    .returningAll()
    .executeTakeFirstOrThrow()
}

export async function getUser(username: string) {
  return await db.selectFrom('users')
  .selectAll()
  .where('un', '=', username)
  .execute()
}


