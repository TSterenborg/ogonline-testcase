<script lang="ts">
    export let image: string;
    export let city: string;
    export let hotel: string;
    export let description: string;
    export let review: string;
    export let price: string;
</script>

<div class="relative mb-[200px] px-[12px] max-2xl:mb-[1%]">
    <div class="relative">
        <img src={image} alt="" class="aspect-[785/500] w-[785px] max-w-full object-cover">
        
        <div class="absolute bottom-[-28%] left-1/2 flex h-[250px] w-[70%] -translate-x-1/2 flex-col justify-between border border-secondary bg-white px-[24px] py-[18px] text-center max-2xl:static max-2xl:left-0 max-2xl:w-full max-2xl:translate-x-0">
            <h3 class="text-primary uppercase">{city}</h3>
            <div class="flex flex-col justify-between">
                <h2 class="heading-4">{hotel}</h2>
                <p class="body-text-normal py-[12px] text-text_gray">{description}</p>
                <p class="text-text_gray">{review}</p>
            </div>
            <p class="font-[600]">{price}</p>
        </div>
    </div>
</div>
    
    