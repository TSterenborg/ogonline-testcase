<script lang="ts">
    export let image: string;
    export let city: string;
    export let hotel: string;
    export let description: string;
    export let rating: string;
    export let ratingTotal: string;
    export let price: string;
</script>

<div class="relative mb-[200px] px-[12px] max-2xl:mb-[1%]">
    <div class="relative">
        <img src={image} alt="" class="aspect-[785/500] w-[785px] max-w-full object-cover">
        
        <div class="absolute bottom-[-28%] left-1/2 flex h-[250px] w-[70%] -translate-x-1/2 flex-col justify-between border border-secondary bg-white px-[24px] py-[18px] text-center max-2xl:static max-2xl:left-0 max-2xl:w-full max-2xl:translate-x-0">
            <h3 class="uppercase tracking-[1px] text-primary">{city}</h3>
            <div class="flex flex-col justify-between">
                <h2 class="heading-4">{hotel}</h2>
                <p class="body-text-normal py-[12px] text-text_gray">{description}</p>
                
                <div class="flex items-center justify-center text-text_gray">
                    <p class="text-primary">{rating}</p>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-[4px]">
                        <path d="M9.74675 11.1014C9.85478 11.536 9.381 11.8825 8.99958 11.6479L6.26205 9.96429C6.1014 9.86549 5.89883 9.86549 5.73818 9.96429L3.00065 11.6479C2.61923 11.8825 2.14545 11.536 2.25349 11.1014L3.02134 8.01294C3.06749 7.8273 3.00368 7.6316 2.85699 7.50884L0.401737 5.45428C0.0569763 5.16578 0.238412 4.60431 0.686803 4.57211L3.90105 4.3413C4.09035 4.3277 4.25563 4.20811 4.32774 4.03255L5.53761 1.08697C5.7074 0.673592 6.29283 0.673593 6.46262 1.08697L7.67249 4.03255C7.7446 4.20811 7.90988 4.3277 8.09918 4.3413L11.3134 4.57211C11.7618 4.60431 11.9433 5.16578 11.5985 5.45428L9.14325 7.50884C8.99655 7.6316 8.93274 7.8273 8.9789 8.01294L9.74675 11.1014Z" fill="#E1B32C"/>
                    </svg>
                    <p>{ratingTotal}</p>
                </div>
            </div>
            <p class="font-[600]">{price}</p>
        </div>
    </div>
</div>
    