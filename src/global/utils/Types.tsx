import { ReactNode } from "react"

export interface IExpenseItem {
    id?: string
    date: Date
    title: string
    amount: number
}

export interface IExpenseItemForm {
    date: string
    title: string
    amount: string
}

export interface ExpenseListProps {
    items: IExpenseItem[]
}

export interface ExpenseItemProps {
    item: IExpenseItem
}

export interface ExpenseDateProps {
    date: Date
}

export interface ExpenseFormProps {
    onSaveExpenseData: (expenseData: IExpenseItem) => void;
}

export interface NewExpenseProps {
    onAddExpense: (expenseData: IExpenseItem) => void;
}

export interface CardProps {
    className?: string;
    title?: string;
    children: ReactNode;
}

export interface ExpenseFilterProps {
    selected: string;
    onChangeFilter: (selectedYear: string) => void;
}