'use server';

import { IGroupExpenseWithPayer } from '@/types/Expense';
import { generateAuthHeaders } from './authorizer';

export const getUserExpenses = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/expenses`, {
    headers,
  });

  if (response.ok) {
    const body = (await response.json()) ?? [];
    return body;
  }

  return null;
};

export const getExpenseById = async (id: string) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/expenses/${id}`, {
    headers,
  });

  if (response.ok) {
    const { expense } = (await response.json()) ?? {};
    return expense as IGroupExpenseWithPayer;
  }

  return null;
};

export const addUserToExpense = async (
  userId: string,
  groupId: string,
  expenseId: string,
) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/expenses/adduser`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ targetId: userId, groupId, expenseId }),
  });

  return response.status;
};
