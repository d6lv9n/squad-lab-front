<template>
    <div>
        <div class="flex flex-col gap-y-1.5">
            <label
            for="title"
            class="font-bold text-lg">Title</label>

            <input
            v-model="titleInput.data.value"
            @keyup="validateTitle"
            type="text"
            name="title"
            id="title"
            class="px-3 py-1.5">

            <p
            v-if="titleInput.data.error"
            class="text-red-600 text-sm">{{ titleInput.data.errorMessage }}</p>
        </div>

        <div class="flex flex-col gap-y-1.5">
            <label
            for="description"
            class="font-bold text-lg">Description</label>

            <textarea
            v-model="descriptionInput.data.value"
            @keyup="validateDescription"
            name="description"
            id="description"
            cols="30"
            rows="10"
            class="p-3"></textarea>

            <p
            v-if="descriptionInput.data.error"
            class="text-red-600 text-sm">{{ descriptionInput.data.errorMessage }}</p>
        </div>

        <button
        @click="toNext"
        type="button"
        class="bg-blue-600/30 block py-1.5 rounded-full text-center w-full">Next</button>
    </div>
</template>

<script setup>
import { useInput } from '@/composables/useInput.js';

// Props
const props = defineProps({
    title: { required: true, type: String },
    description: { required: true, type: String }
});

// Data
const descriptionInput = useInput(props.description);
const titleInput = useInput(props.title);

// Emits
const emits = defineEmits([
    'set-input',
    'to-next',
]);

// Methods
const toNext = () => {
    validateDescription();
    validateTitle();

    if (descriptionInput.data.error || titleInput.data.error) {
        return;
    }
    
    emits('set-input', { key: 'title', value: titleInput.data.value.trim() });
    emits('set-input', { key: 'description', value: descriptionInput.data.value.trim() });
    emits('to-next');
};
const validateDescription = () => {
    let error = false;
    let message = null;

    const value = descriptionInput.data.value.trim();

    if (value.length === 0) {
        error = true;
        message = 'Please enter board description';
    } else if (value.length >= 3000) {
        error = true;
        message = 'Description cannot have more than 3000 characters';
    }

    descriptionInput.setError(error, message);
};
const validateTitle = () => {
    let error = false;
    let message = null;

    const value = titleInput.data.value.trim();

    if (value.length === 0) {
        error = true;
        message = 'Please enter board title';
    } else if (value.length >= 255) {
        error = true;
        message = 'Title cannot have more than 255 characters';
    }

    titleInput.setError(error, message);
};
</script>
