<template>
    <div>
        <div class="flex flex-grow flex-row flex-shrink items-center justify-between py-3">
            Tasks component

            <button
            @click="addTask"
            type="button"
            class="font-semibold
            focus:underline
            hover:underline">Add task</button>
        </div>

        <div
        v-if="isMounted && tasks.length > 0"
        class="flex flex-col gap-y-9 py-6">
            <div
            v-for="(task, index) in tasks"
            :key="task.id"
            class="border border-gray-300/60 p-3 relative rounded-xl w-full">
                <button
                @click="removeTask(task.id)"
                type="button"
                class="absolute bg-red-600 px-3 py-1 right-0 rounded-full text-white -top-3.5">Remove</button>
                    
                <div class="flex flex-col gap-y-1.5">
                    <label
                    for="title"
                    class="font-bold text-lg">Task title</label>

                    <input
                    v-model="tasks[index].title.data.value"
                    @keyup="validateTaskTitle(task.id)"
                    type="text"
                    name="title"
                    id="title"
                    class="px-3 py-1.5">

                    <p
                    v-if="tasks[index].title.data.error"
                    class="text-red-600 text-sm">{{ tasks[index].title.data.errorMessage }}</p>
                </div>

                <div class="flex flex-col gap-y-1.5">
                    <label
                    for="title"
                    class="font-bold text-lg">Task description</label>

                    <input
                    v-model="tasks[index].description.data.value"
                    @keyup="validateTaskDescription(task.id)"
                    type="text"
                    name="title"
                    id="title"
                    class="px-3 py-1.5">

                    <p
                    v-if="tasks[index].description.data.error"
                    class="text-red-600 text-sm">{{ tasks[index].description.data.errorMessage }}</p>
                </div>
            </div>
        </div>

        <button
        @click="toPrevious"
        type="button"
        class="bg-blue-600/30 block py-1.5 rounded-full text-center w-full">Previous</button>

        <button
        @click="toNext"
        type="button"
        class="bg-blue-600/30 block py-1.5 rounded-full text-center w-full">Next</button>
    </div>    
</template>

<script setup>
import { useInput } from '@/composables/useInput.js';
import { computed, onMounted, ref } from 'vue';

// Props
const props = defineProps({
    tasks: { required: true, type: Array }
});

// Computed
const hasErrors = computed(() => {
    if (tasks.value.length === 0) {
        return false;
    }

    return tasks.value.some(task => task.title.data.error || task.description.data.error);
});

// Data
const isMounted = ref(false);
const tasks = ref([]);

// Emits
const emits = defineEmits([
    'set-input',
    'to-next',
    'to-previous',
]);

// Methods
const addTask = () => {
    if (tasks.value.length >= 10) {
        return;
    }

    tasks.value.unshift({
        id: new Date().getTime(),
        title: useInput(),
        description: useInput(),
    });
};
const copyFromProps = () => {
    console.log('props tasks:', props.tasks);

    if (props.tasks.length === 0) {
        return;
    }

    props.tasks.forEach(task => {
        tasks.value.push({
            id: task.id,
            title: useInput(task.title),
            description: useInput(task.description)
        });
    });
};
const removeTask = (id) => {
    if (! isMounted.value || tasks.length === 0 || ! tasks.value.find(task => task.id === id)) {
        return;
    }

    tasks.value = tasks.value.filter(task => task.id !== id);
};
const toNext = () => {
    if (! isMounted.value) {
        return;
    }

    validateTasks();

    if (hasErrors.value) {
        return;
    }

    const value = tasks.value.map(task => {
        return {
            id: task.id,
            title: task.title.data.value,
            description: task.description.data.value
        };
    });
    
    emits('set-input', { key: 'tasks', value });
    emits('to-next');
};
const toPrevious = () => {
    if (! isMounted.value) {
        return;
    }

    validateTasks();

    if (hasErrors.value) {
        return;
    }

    const value = tasks.value.map(task => {
        return {
            id: task.id,
            title: task.title.data.value,
            description: task.description.data.value
        };
    });

    emits('set-input', { key: 'tasks', value });
    emits('to-previous');
};
const validateTaskTitle = (id) => {
    if (! isMounted.value || tasks.value.length === 0) {
        return;
    }

    let task = tasks.value.find(task => task.id === id);

    if (! task) {
        return;
    }

    let error = false;
    let message = null;

    const value = task.title.data.value.trim();

    if (value.length === 0) {
        error = true;
        message = 'Please enter task title';
    } else if (value.length >= 255) {
        error = true;
        message = 'Task title cannot have more than 255 characters';
    }

    task.title.setError(error, message);
};
const validateTaskDescription = (id) => {
    if (! isMounted.value || tasks.value.length === 0) {
        return;
    }

    let task = tasks.value.find(task => task.id === id);

    if (! task) {
        return;
    }

    let error = false;
    let message = null;
};
const validateTasks = () => {
    if (tasks.value.length === 0) {
        return;
    }

    tasks.value.forEach(task => {
        validateTaskTitle(task.id);
        validateTaskDescription(task.id);
    });
};

// Lifecycles
onMounted(() => {
    copyFromProps();

    isMounted.value = true;
});
</script>
