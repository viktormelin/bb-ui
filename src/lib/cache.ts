'use server';

import { revalidatePath } from 'next/cache';

export const clearCacheByPath = async (
  path: string,
  type?: 'page' | 'layout',
) => {
  try {
    if (path) {
      revalidatePath(path, type);
    } else {
      revalidatePath('/');
    }
  } catch (error) {
    console.error(error);
  }
};
