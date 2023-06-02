export interface IExpenseItem {
    id: string
    date: Date
    title: string
    amount: number
}

export interface ExpenseItemProps {
    item: IExpenseItem
}

export interface ExpenseDateProps {
    date: Date
}
  