<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import { fetchListings, type Listing } from "$lib/api/places";
    import { onMount } from "svelte";

    let hotels: Listing[] = [];

    onMount(async () => {
        hotels = await fetchListings("Amsterdam");
    });
</script>

<div class="flex h-screen w-full flex-col items-center justify-end overflow-x-hidden bg-cover bg-center bg-no-repeat" style="background-image: url(./images/amsterdam.png);">
    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
    <div class="relative my-[80px] w-[70%] text-white max-sm:text-center">
        <h1 class="heading-1 py-[4px]">Lorem ipsum dolor sit amet</h1>
        <p class="body-text-large max-w-[650px] max-sm:py-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rhoncus, at massa eleifend purus sagittis sed justo, purus diam.</p>

        <div class="py-[4px] text-[18px] font-[400] leading-[26px] text-black max-sm:flex max-sm:flex-col max-sm:items-center">
            <button class="button-medium bg-primary hover:bg-primary_hover">Lorem ipsum</button>
            <button class="button-medium bg-secondary hover:bg-secondary_hover">Lorem ipsum</button>
        </div>
    </div>
</div>

<div class="flex min-h-screen flex-col items-center justify-center bg-background_light">
    <div class="items-center justify-center py-[120px] max-2xl:text-center">
        <h3 class="heading-3 max-2xl:heading-2 px-[12px] pb-[22px]">Ontdek ons hotel aanbod</h3>
        <div class="grid grid-cols-2 gap-4 max-2xl:grid-cols-1">
            {#each hotels as hotel}
                <Card
                    image={hotel.image}
                    city={hotel.city}
                    hotel={hotel.hotel}
                    description={hotel.description}
                    rating={hotel.rating}
                    ratingTotal={hotel.ratingTotal}
                    price={hotel.price}
                />
            {/each}
        </div>
    </div>
</div>
