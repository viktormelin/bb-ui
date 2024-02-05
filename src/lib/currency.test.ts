import { calculateTotal, formatCurrency } from './currency';

describe('should test currency helpers', () => {
  it('should test currency formatting', async () => {
    const formattedValue = formatCurrency(100);
    expect(formattedValue).toContain('100,00');
    expect(formattedValue).toContain('kr');
  });
  it('should test currency formatting', async () => {
    const values = [
      {
        id: '1',
        name: 'Name',
        groupsId: '1',
        group_usersId: '1',
        settled: false,
        expense_total: 10,
      },
      {
        id: '1',
        name: 'Name',
        groupsId: '1',
        group_usersId: '1',
        settled: false,
        expense_total: 10,
      },
      {
        id: '1',
        name: 'Name',
        groupsId: '1',
        group_usersId: '1',
        settled: false,
        expense_total: 10,
      },
    ];
    const total = calculateTotal(values);
    expect(total).toBe(30);
  });
});
