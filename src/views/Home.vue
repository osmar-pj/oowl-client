<template>
  <section class="section">
    <div class="columns">
      <div class="column is-2">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <div v-show="door">
                  <font-awesome-icon :icon="['fas', 'door-open']" size="4x" :style="{color: '#ff3399'}"/>
                </div>
                <div v-show="!door">
                  <font-awesome-icon :icon="['fas', 'door-closed']" size="4x" :style="{color: '#99dd55'}"/>
                </div>
              </div>
            </div>
            <div class="content">
              Puerta {{ door ? 'abierta' : 'cerrada' }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-2">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <div v-show="presence">
                  <font-awesome-icon :icon="['fas', 'user']" size="4x" :style="{color: '#ff3399'}"/>
                </div>
                <div v-show="!presence">
                  <font-awesome-icon :icon="['fas', 'user-slash']" size="4x" :style="{color: '#99dd55'}"/>
                </div>
              </div>
            </div>
            <div class="content">
              {{ presence ? 'Hay alguien' : 'Todo en orden' }}
            </div>
          </div>
        </div>
      </div>
      <div class="column is-2">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <div v-show="weight > 11.2">
                  <font-awesome-icon :icon="['fas', 'gas-pump']" size="4x" :style="{color: '#99dd55'}"/>
                </div>
                <div v-show="weight <= 11.2">
                  <font-awesome-icon :icon="['fas', 'gas-pump']" size="4x" :style="{color: '#ff3399'}"/>
                </div>
              </div>
            </div>
            <div class="content">
              {{ ((weight - 10) * 100 / (20 - 10)).toFixed(2) }} %
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {
      door: false,
      presence: false,
      weight: 0
    }
  },
  mounted() {
    this.$socket.on('sensors', data => {
      this.door = !!parseInt(data.door)
      this.presence = !!parseInt(data.presence)
      this.weight = parseFloat(data.weight)
    })
  }
}
</script>
