<template>
    <div>
        <v-footer>
            {{text}}
        </v-footer>
    </div>
</template>

<script>
export default {
    data: () => ({
        text: 'Footer'
    }),
    methods: {}
}
</script>

<style>
  .v-footer {
    width: 100%;
    padding: 1rem 0;
    color: white !important;
    background: #4fc08d !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
</style>