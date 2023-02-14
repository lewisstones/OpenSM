/**
 * @description Base user type, generic to all users
 */
export interface baseUser {
  first_name: string;
  last_name: string;
  email: string;
  is_admin: boolean;
}

/**
 * @description Subset of the user type, used for creation of new users
 */
export interface createUser {
  first_name: string;
  last_name: string;
  email: string;
  is_admin: boolean;
}
