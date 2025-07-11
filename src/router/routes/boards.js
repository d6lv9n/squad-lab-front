import BoardsRoot from '@/pages/boards/Root.vue';
import BoardsNewRoot from '@/pages/boards/children/new/Root.vue';
import BoardsIndexRoot from '@/pages/boards/children/index/Root.vue';

// UUID v1-v5
// :uuid([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})

// UUID v4 only
// :uuid([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})

export default {
    path: '/boards',
    component: BoardsRoot,
    children: [
        {
            meta: {
                guestOnly: false,
                userOnly: true,
            },
            path: 'new',
            name: 'boards.new',
            component: BoardsNewRoot
        },
        {
            meta: {
                guestOnly: false,
                userOnly: false,
            },
            path: ':uuid([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})', // v4
            name: 'boards.index',
            component: BoardsIndexRoot,
        },
    ]
};