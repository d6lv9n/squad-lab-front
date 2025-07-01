<template>
    <div>
        <span class="text-blue-600 underline">It works!</span>
        <RouterLink :to="{ name: 'account.login' }">Log in</RouterLink>
        <br/>
        <RouterLink :to="{ name: 'account.signup' }">Sign up</RouterLink>
    </div>
</template>

<script setup>

</script>
