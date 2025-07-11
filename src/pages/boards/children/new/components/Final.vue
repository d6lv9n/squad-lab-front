<template>
    <div>
        <div class="flex flex-1 flex-col items-center justify-between py-3">
            Final component

            <div class="flex flex-col gap-y-9 py-6 w-full">
                <div>
                    <h2 class="font-bold text-lg">Title</h2>

                    <p class="text-gray-600">{{ props.title }}</p>
                </div>

                <div>
                    <h2 class="font-bold text-lg">Description</h2>

                    <p class="text-gray-600">{{ props.description }}</p>
                </div>

                <div
                v-if="props.members.length > 0"
                class="flex flex-col gap-y-3">
                    <h2 class="font-bold text-lg">Members</h2>

                    <ul class="list-disc pl-6">
                        <li
                        v-for="member in props.members"
                        :key="member.id"
                        class="text-gray-600">{{ member.name }}</li>
                    </ul>
                </div>

                <div
                v-if="props.tasks.length > 0"
                class="flex flex-col gap-y-3">
                    <h2 class="font-bold text-lg">Tasks</h2>

                    <ul class="list-disc pl-6">
                        <li
                        v-for="task in props.tasks"
                        :key="task.id"
                        class="text-gray-600">{{ task.title }}</li>
                    </ul>
                </div>
            </div>

            <button
            @click="toPrevious"
            type="button"
            class="bg-blue-600/30 block py-1.5 rounded-full text-center w-full">Previous</button>

            <button
            @click="create"
            type="button"
            class="bg-blue-600/30 block py-1.5 rounded-full text-center w-full">Create</button>
        </div>
    </div>    
</template>

<script setup>
import { ref } from 'vue';

// Props
const props = defineProps({
    title: { required: true, type: String },
    description: { required: true, type: String },
    tasks: { required: true, type: Array },
    members: { required: true, type: Array }
});

// Data
const isLoading = ref(false);

// Emits
const emits = defineEmits([
    'to-previous',
]);

// Methods
const create = async () => {
    if (isLoading.value) {
        return;
    }

    isLoading.value = true;

    const formData = new FormData();
    formData.append('title', props.title);
    formData.append('description', props.description);

    if (props.tasks.length === 0) {
        formData.append('tasks', '');
    } else {
        props.tasks.forEach((task, index) => {
            formData.append(`tasks[${index}][title]`, task.title);
            formData.append(`tasks[${index}][description]`, task.description ?? '')
        });
    }

    if (props.members.length === 0) {
        formData.append('members', '');
    } else {
        // 
    }

    try {
        const res = await window.axios.post(`http://localhost:7000/api/v1/boards`, formData);

        console.log('res:', res);
    } catch (err) {
        handleError(err);
    } finally {
        isLoading.value = false;
    }
};
const handleError = (err) => {
    console.log('err:', err);
};
const toPrevious = () => {
    if (isLoading.value) {
        return;
    }

    emits('to-previous');
};
</script>
