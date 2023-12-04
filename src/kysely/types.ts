import type { ColumnType, Insertable, Selectable, Updateable } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

  export interface DB {
    users: Users;
  }

export interface Users {
  id: Generated<number>;
  pw: string;
  un: string;
}

export type UserSelectable = Selectable<Users>
export type UserInsertable = Insertable<Users>
export type UserUpdateable = Updateable<Users>

