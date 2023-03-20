<script setup lang="ts">
function resize(event: MouseEvent) {
    const resizer = event.target as HTMLElement
    const sidebar = resizer.parentElement as HTMLElement

    const root = document.querySelector(':root') as HTMLElement

    const initialWidth = sidebar.offsetWidth
    const initialX = event.clientX

    const mouseMove = (event: MouseEvent) => {
        const width = initialWidth + (event.clientX - initialX)

        if (width > 400 || width < 200) return

        root.style.setProperty('--width-sidebar', `${width}px`)
    }

    const mouseUp = () => {
        document.removeEventListener('mousemove', mouseMove)
        document.removeEventListener('mouseup', mouseUp)
    }

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}
</script>

<template>
    <nav class="sidebar">
        <img src="/logo.svg" width="130" height="40" alt="Logo" />

        <ul class="sidebar-links">
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
                <nuxt-link>
                    <IconLibrary />
                    Your Library
                </nuxt-link>
            </li>

            <li>
                <nuxt-link>
                    <div class="box-icon new-playlist-icon">
                        <IconAdd />
                    </div>
                    Create Playlist
                </nuxt-link>
            </li>

            <li>
                <nuxt-link>
                    <div class="box-icon liked-songs-icon">
                        <IconHeart />
                    </div>
                    Liked Songs
                </nuxt-link>
            </li>
        </ul>

        <section class="bottom-links">
            <a href="">Legal</a>
            <a href="">Privacy Center</a>
            <a href="">Privacy Policy</a>
            <a href="">Cookies</a>
            <a href="">About Ads</a>
        </section>

        <div class="sidebar-resizer" @mousedown="resize"></div>
    </nav>
</template>
