'use server';

import { IGroupExpenseWithPayer } from '@/types/Expense';
import { generateAuthHeaders } from './authorizer';
import { redirect } from 'next/navigation';

export const getUserExpenses = async () => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/expenses`, {
    headers,
  });

  if (response.ok) {
    const body = await response.json();
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

export const editExpenseSplit = async (
  userId: string,
  groupId: string,
  expenseId: string,
  updatedSplit: number | string,
) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/expenses/edit/split`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      targetId: userId,
      groupId,
      expenseId,
      updatedSplit,
    }),
  });

  return response.status;
};

export const createExpense = async (data: any) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/expenses/new`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  const body = await response.json();

  if (response.ok) {
    redirect(`/dashboard/expenses/${body.expense.id}`);
  } else {
    console.error(body.error);
  }
};

export const removeExpense = async (expenseId: string) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(`${process.env.API_ROUTE}/expenses/remove`, {
    method: 'DELETE',
    headers,
    body: JSON.stringify({ expenseId }),
  });

  const body = await response.json();
  if (response.ok) {
    redirect(`/dashboard/expenses/${body.expense.id}`);
  } else {
    console.error(body.error);
  }
};

export const resetExpense = async (expenseId: string) => {
  const headers = await generateAuthHeaders();
  const response = await fetch(
    `${process.env.API_ROUTE}/expenses/reset/${expenseId}`,
    {
      method: 'GET',
      headers,
    },
  );

  return response.status;
};
