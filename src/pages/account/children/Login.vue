<template>
    <div class="text-2xl">Log in page</div>

    <div class="flex flex-col gap-y-3">
        <div class="flex flex-col">
            <label for="email">Email</label>

            <input
            v-model="emailInput.data.value"
            id="email"
            type="email"
            class="border border-gray-300 px-3 py-1.5 rounded-full"/>
        </div>

        <div class="flex flex-col">
            <label for="password">Password</label>

            <input
            v-model="passwordInput.data.value"
            id="password"
            type="password"
            class="border border-gray-300 px-3 py-1.5 rounded-full"/>
        </div>

        <button
        @click="submitForm"
        type="button"
        class="px-3">
            <template v-if="isLoading">Loading</template>
            <template v-else>Log in</template>
        </button>
    </div>
</template>

<script setup>
import { useInput } from '@/composables/useInput.js';
import { ref } from 'vue'; 

// Data
const emailInput = useInput();
const isLoading = ref(false);
const passwordInput = useInput();

// Methods
const handleError = (err) => {
    // 
};
const submitForm = async () => {
    if (isLoading.value) {
        return;
    }

    validateEmail();
    validatePassword();

    if (emailInput.data.error || passwordInput.data.error) {
        return;
    }

    isLoading.value = true;

    try {
        const res = await window.axios.post('http://localhost:8000/api/v1/account/login', {
            email: emailInput.data.value,
            password: passwordInput.data.value
        });

        window.axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

        localStorage.setItem('token', res.data.token);
    } catch (err) {
        console.error('error:', err);

        handleError(err);
    } finally {
        isLoading.value = false;
    }
};
const validateEmail = () => {
    // 
};
const validatePassword = () => {
    // 
};
</script>
