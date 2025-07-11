<template>
    <div class="max-w-lg mx-auto overflow-hidden">
        <h1 class="font-bold text-2xl">New board page</h1>

        <Transition appear="" mode="out-in" name="fade-slide">
            <MainComponent
            v-if="currentComponent === 'main'"
            key="main"
            @set-input="setInput"
            @to-next="currentComponent = 'tasks'"
            :title="inputs.title"
            :description="inputs.description"></MainComponent>
            <TasksComponent
            v-else-if="currentComponent === 'tasks'"
            key="tasks"
            @set-input="setInput"
            @to-next="currentComponent = 'members'"
            @to-previous="currentComponent = 'main'"
            :tasks="inputs.tasks"></TasksComponent>
            <MembersComponent
            v-else-if="currentComponent === 'members'"
            key="members"
            @set-input="setInput"
            @to-next="currentComponent = 'final'"
            @to-previous="currentComponent = 'tasks'"
            :members="inputs.members"></MembersComponent>
            <FinalComponent
            v-else-if="currentComponent === 'final'"
            key="final"
            @to-previous="currentComponent = 'members'"
            :title="inputs.title"
            :description="inputs.description"
            :tasks="inputs.tasks"
            :members="inputs.members"></FinalComponent>
        </Transition>
    </div>
</template>

<script setup>
import { useInput } from '@/composables/useInput.js';
import { reactive, ref } from 'vue';
// Components
import FinalComponent from './components/Final.vue';
import MainComponent from './components/Main.vue';
import MembersComponent from './components/Members.vue';
import TasksComponent from './components/Tasks.vue';

// Data
const currentComponent = ref('main');
const inputs = reactive({
    title: '',
    description: '',
    tasks: [],
    members: []
});
const previousComponent = ref('');

// Methods
const setInput = ({ key, value }) => {
    inputs[key] = value;
};
</script>
