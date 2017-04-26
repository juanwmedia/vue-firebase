<template>
    <section>
        <router-link to="/">Info</router-link>
        <router-link :to="{path: '/bio', hash: '#parrafo'}">Bio</router-link>
        <hr>
        <router-view></router-view>
    </section>
</template>