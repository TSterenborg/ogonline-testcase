<script lang="ts">
    import { onMount } from "svelte";

    let isHidden: boolean = false;
    let lastScrollY: number = 0;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        isHidden = currentScrollY > lastScrollY && currentScrollY > 100;
        lastScrollY = currentScrollY;
    };

    onMount(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<header class="fixed top-0 z-50 flex h-[90px] w-full select-none items-center justify-center bg-white transition-all duration-[250ms] ease-in-out" style="transform: translateY({isHidden ? '-100%' : '0'});">
    <div class="flex h-full w-[1700px] items-center px-[15px] max-sm:justify-center min-[1921px]:mx-[75px] min-[1921px]:w-full">
        <a href="/">
            <img src="./images/ogonline-logo.svg" alt="ogonline-logo">
        </a>
    </div>
</header>