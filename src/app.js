"use strict";

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../view/app.vue';
import Home from '../view/home.vue';
import Omoss from '../view/omoss.vue';
import Brollop from '../view/brollop.vue';
import Folje from '../view/folje.vue';
import Onskelista from '../view/onskelista.vue';
import Osa from '../view/osa.vue';


//////////////////////////////////////

Vue.use(VueRouter);

// Routes
const routes = [
	{
		path: '', component: App, redirect: '/home',
		children: [
			{
				path: 'home',
				component: Home,
			},
			{
				path: 'omoss',
				component: Omoss,
			},
			{
				path: 'brollop',
				component: Brollop,
			},
			{
				path: 'folje',
				component: Folje,
			},
			{
				path: 'onskelista',
				component: Onskelista,
			},
			{
				path: 'osa',
				component: Osa,
			},
		]
	},
];

const router = new VueRouter({
	mode: 'history',
	routes // short for `routes: routes`
});

const app = new Vue({
	router,
}).$mount('#app');


