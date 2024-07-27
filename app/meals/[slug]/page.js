export default function Meals({ params }) {
    return (
        <main>
            <h1>Meal</h1>
            <p>{params.slug}</p>
        </main>
    )
}