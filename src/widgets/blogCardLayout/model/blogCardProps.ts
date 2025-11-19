import type { CardProps } from "@shared/cardProps";

export interface blogCardProps extends Omit<CardProps, 'location'> {
    desc: string,
    date: string,
    author: string,
    comments: string,
}