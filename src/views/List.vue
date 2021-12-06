<template>
  <div id="list" class="pa-4">
    <v-container fluid>
      <h3 class="headline font-weight-medium">Frameworks Alternativos:</h3>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="i in loading ? 4 : list.length"
          :key="i"
          class="mx-xs-auto"
        >
          <v-skeleton-loader type="card-avatar" :loading="loading">
            <Card :framework="list[i]"></Card>
          </v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Card from "@/components/Card";

export default {
  data: () => ({
    loading: true,
    countFrameworksToAdd: 3,
  }),
  components: {
    Card,
  },
  computed: mapState(["list"]),
  methods: {
    ...mapActions(['addRandomFramework']),
  },
  
  mounted() {

    let i = 0;
    while(i < this.countFrameworksToAdd){
      this.addRandomFramework();
      i += 1;
    }

    setTimeout(() => {
      this.loading = false;
    }, 5000);
  },
};
</script>

<style lang="scss">
#list {
  color: #fff;
}
.card {
  background: #f9f9f9 !important;
}
</style>
