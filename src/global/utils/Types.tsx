import { ReactNode } from "react"

export interface IExpenseItem {
    id: string
    date: Date
    title: string
    amount: number
}

export interface HeaderProps {
    toggleTheme: () => void
    currentTheme: string
}
export interface ExpenseItemProps {
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

export interface ExpensesProps {
    items: IExpenseItem[]
    onClickAdd: () => void
    canShowForm: boolean
}


export interface ExpensesListProps {
    items: IExpenseItem[]
}

export interface ExpenseDateProps {
    date: Date
}

export interface ExpenseFormProps {
    onSaveExpenseData: (expenseData: ExpenseItemProps) => void;
    onClickAdd: () => void;
}

export interface NewExpenseProps {
    onSubmitNewExpense: (expenseData: IExpenseItem) => void;
    canShowForm: boolean;
    onClickAdd: () => void;
}

export interface CardProps {
    className?: string;
    title?: string;
    children: ReactNode;
}

export interface ExpenseFilterProps {
    selected: string;
    onChangeFilter: (selectedYear: string) => void;
    onClickAdd: () => void;
    canShowForm: boolean
}

export interface IDataPoint {
    label: string;
    value: number;
}
export interface ChartProps {
    dataPoints: IDataPoint[]
}

export interface ChartBarProps {
    label: string;
    value: number;
    maxValue: number | null;
}