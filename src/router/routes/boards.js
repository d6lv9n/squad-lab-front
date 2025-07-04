import BoardsRoot from '@/pages/boards/Root.vue';
import BoardsNew from '@/pages/boards/children/New.vue';

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
            component: BoardsNew
        },
        // {
        //     meta: {
        //         guestOnly: false,
        //         userOnly: false,
        //     },
        //     path: ':uuid([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})',
        //     name: 'boards.index',
        //     component: BoardsIndex,
        // },
    ]
};