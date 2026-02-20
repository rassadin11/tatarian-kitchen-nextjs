export const siteConfig = {
    title: "Татарская кухня",
    description: "Рецепты татарской кухни",
    navItems: [
        { href: '/', label: 'Рецепты' },
        { href: '/ingredients', label: 'Ингредиенты' },
        { href: '/about', label: 'О нас' },
    ],
    pagesContent: {
        "/": {
            content: "Здесь будут рецепты..."
        },
        "/ingredients": {
            content: "Традиционные ингредиенты татарской кухни..."
        },
        "/about": {
            content: `
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum animi necessitatibus ipsa mollitia fugiat maiores inventore quis repellendus quod, consectetur nemo odio voluptatem neque, rem sit adipisci! Nemo velit blanditiis accusamus impedit adipisci quidem autem!</p>
                <br/>
                <h2>Veniam labore aliquid porro quasi ab culpa, accusamus sequi facere, voluptatibus quidem minima corrupti vero iste sunt quia obcaecati quisquam sit quaerat earum officia?</h2>
                <br/>
                <p> Pariatur magni praesentium ratione id consequuntur, velit fuga itaque doloribus tempora assumenda facere rem similique nisi inventore sed neque cumque vitae dolorum alias voluptate accusamus ipsum? Quas ut at quod voluptatibus cumque distinctio dolorem consectetur illo architecto eum earum ullam voluptatem magni, tempora expedita. Doloribus, rerum eum! Maiores consectetur officiis commodi voluptatem! Sequi facere sit, deleniti aliquam nisi minus facilis culpa fugit laboriosam architecto aliquid, iure porro, veniam optio sint omnis saepe quas excepturi eum ex. A consequuntur rerum laboriosam magni iste voluptatibus perspiciatis totam accusamus, ipsum enim in tempora libero eligendi commodi optio adipisci? Libero doloremque, suscipit, harum assumenda quos nihil cumque fugit animi autem excepturi earum deleniti nulla omnis laboriosam repellendus facilis magnam consequuntur nesciunt voluptate aspernatur iusto illum? Iste consectetur dicta, adipisci facilis voluptate tempore earum sapiente fugiat similique laboriosam quos omnis culpa nobis soluta neque natus libero!</p>
            `
        }
    }
}
