import { IGroupUser } from './Groups';

export interface IUserProfile {
  id: string;
  email: string;
  email_verified: boolean;
  given_name: string;
  family_name: string;
  middle_name?: string;
  nickname?: string;
  preferred_username?: string;
  picture?: string;
  signup_methods: string[] | string;
  gender?: string;
  birthdate?: string;
  phone_number?: string;
  phone_number_verified?: boolean;
  roles: string[];
  created_at: number;
  updated_at: number;
  is_multi_factor_auth_enabled?: boolean;
  app_data: any;
  group_users: IGroupUser[];
  friends: {
    user: {
      id: string;
      email: string | null;
    };
  }[];
}
