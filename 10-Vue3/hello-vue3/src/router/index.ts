// 1. import createRouter
import {createRouter, createWebHistory} from 'vue-router'
import Person from "@/components/Person.vue";
import Foo from "@/components/Foo.vue";
import MyHook from "@/components/MyHook.vue";

// 2. create router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Person
        },
        {
            name: 'About',
            path: '/about',
            component: Foo
        },
        {
            path: '/contact',
            component: MyHook
        },
    ]
})

export default router