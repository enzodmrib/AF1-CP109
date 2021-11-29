
<template>
  <v-card class="card" name="Vue">
    <div class="card__image">
      <img v-if="!framework" src="../assets/logo.png" alt="Framework" />
      <img
        v-if="!!framework"
        :src="framework.framework.$attrs.framework.imageSrc"
        alt="Framework"
      />
    </div>
    <div v-if="!!framework" class="card__name">
      {{ framework.framework.$attrs.framework.name }}
    </div>
  </v-card>
</template>

<script>
export default {
  data: (framework) => ({
    framework: framework,
  }),
  methods: {},
  mounted() {},
};
</script>

<style>
.card {
  position: absolute;

  width: 90%;
  height: 15rem;
  min-width: 90%;
  min-height: 8rem;

  padding: 0.5rem;
  border-radius: 1rem;
  background-color: #fff;
  box-shadow: var(--card-shadow);

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-items: center;
}

.card .framework {
  cursor: pointer;
}

.card__image {
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.card__name {
  position: absolute;
}

.card__image img {
  max-width: 90%;
  max-height: 90%;
}
</style>