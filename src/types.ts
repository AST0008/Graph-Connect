import type { GetUsersQuery } from "./graphql/generated";

export type Message = NonNullable<NonNullable<GetUsersQuery["users"]>[number]["messages"]>[number];
export type User = NonNullable<GetUsersQuery["users"]>[number];

