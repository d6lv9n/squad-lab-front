<template>
    <nav class="bg-white flex flex-1 flex-row h-14 items-center px-3 shadow-sm shadow-gray-300/60 sticky top-0 w-full
    sm:h-16">
        <span class="flex-1 font-bold text-2xl">Squad Lab</span>

        <div class="flex flex-1 flex-row items-center justify-end">
            <RouterLink
            :to="{ name: 'account.login' }"
            class="px-3">Log in</RouterLink>

            <RouterLink
            :to="{ name: 'account.signup' }"
            class="border border-blue-600 px-3 py-1 text-blue-600">Sign up</RouterLink>
        </div>
    </nav>
</template>

<script setup>

</script>
