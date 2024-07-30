import Link from "next/link";
import classes from './page.module.css';

export default function MealsPage() {
    return (
        <>
            <header className={classes.header}></header>
            <main className={classes.main}>
                <h1>
                    Delicious meals, created{' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favourite recipe and cook it yourself. It is easy and fun</p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share your favourite recipe 
                    </Link>
                </p>
            </main>
        </>
    )
}