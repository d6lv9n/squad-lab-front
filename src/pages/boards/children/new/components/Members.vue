<template>
    <div>
        Members component

        <div>
            <input
            v-model="searchInput"
            type="text"
            name="name"
            id="name"
            class="block px-3 py-1.5 w-full">

            <button
            @click="searchMember"
            type="button"
            class="bg-blue-600/30 px-3 py-1.5 rounded-full text-white">Search</button>
        </div>

        <button
        @click="toPrevious"
        type="button"
        class="block py-1.5 text-center w-full">Previous</button>

        <button
        @click="toNext"
        type="button"
        class="block py-1.5 text-center w-full">Next</button>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

// Props
const props = defineProps({
    members: { required: true, type: Array }
});

// Data
const isLoading = ref(false);
const members = ref([]);
const searchInput = ref('');
const searchResult = ref([]);

// Emits
const emits = defineEmits([
    'set-input',
    'to-next',
    'to-previous',
]);

// Methods
const addMember = () => {
    if (props.members.length >= 10) {
        return;
    }

    emits('set-input', { key: 'members', value: [...props.members, { id: new Date().getTime(), name: '' }] });
};
const copyFromProps = () => {
    if (props.members.length === 0) {
        return;
    }

    // emits('set-input', { key: 'members', value: [...props.members] });
};
const searchMember = () => {
    console.log('searchMember called with:', searchInput.value.trim());

    if (isLoading.value || searchInput.value.trim().length === 0) {
        return;
    }

    isLoading.value = true;

    // Simulate an API call
    setTimeout(() => {
        // Here you would typically fetch members based on the searchInput
        console.log('Searching for member:', searchInput.value.trim());


        isLoading.value = false;
    }, 3000);
};
const toNext = () => {
    if (isLoading.value) {
        return;
    }

    emits('to-next');
};
const toPrevious = () => {
    if (isLoading.value) {
        return;
    }

    emits('to-previous');
};

// Lifecycles
onMounted(() => {
    copyFromProps();
});
</script>
