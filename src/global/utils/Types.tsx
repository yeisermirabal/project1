import { FC, ReactNode } from "react"

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

export interface CardProps {
    className?: string
    title?: string;
    children: ReactNode;
}