import { useState } from "#app";

interface User {
  id: number
  name: string
}

export const useUserState = () => {
  return useState<User>('user', () => {
    return {
      id: 1,
      name: '山田太郎',
    };
  });
};
