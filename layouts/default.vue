<template>
    <header>
        <h1>My Music</h1>
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/">Home</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/search">Search</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
    <main>
        <slot />
    </main>
    <footer>
        <p>My Music</p>
    </footer>
</template>