<template>
    <div>
        <RouterLink :to="{ name: 'account.login' }">Log in</RouterLink>
        <br/>
        <RouterLink :to="{ name: 'account.signup' }">Sign up</RouterLink>

        <RouterView></RouterView>
    </div>
</template>

<script setup>

</script>
