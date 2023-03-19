<template>
    <nav class="sidebar">
        <img src="/logo.svg" width="130" height="40" alt="Logo" />

        <ul>
            <li>
                <nuxt-link to="/">
                    <IconHome />
                    Home
                </nuxt-link>
            </li>
            <li>
                
                <nuxt-link to="/search">
                    <IconSearch />
                    Search
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <IconLibrary />
                    Your Library
                </nuxt-link>
            </li>
        </ul>
    </nav>
    <header class="header">
        <h1>My Music</h1>

    </header>
    <main class="content">
        <!-- <slot /> -->
    </main>
    <footer class="footer">
        <p>My Music</p>
    </footer>
</template>