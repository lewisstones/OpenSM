/**
 * @description Base user type, generic to all users
 */
export interface baseUser {
  first_name: string;
  last_name: string;
  email: string;
}

/**
 * @description User type, used for returning user data
 */
export interface safeUser {
  id: string;
  first_name: string;
}

/**
 * @description Subset of the user type, used for creation of new users
 */
export interface createUser {
  first_name: string;
  last_name: string;
  email: string;
}

export interface userResponse {
  body: baseUser;
  statusCode: number;
}
