<template>
  <section class="section">
    <div class="columns">
      <div class="column is-2">
        <div class="card">
          <div class="card-content">
            <div>
              <p class="heading">Voltaje Carga (V)</p>
              <p class="title"> {{ voltCarga }} </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-2">
        <div class="card">
          <div class="card-content">
            <div>
              <p class="heading">Voltaje Batteria (V)</p>
              <p class="title"> {{ voltBatt }} </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-2">
        <div class="card">
          <div class="card-content">
            <div>
              <p class="heading">Corriente Carga (A)</p>
              <p class="title"> {{ currCarga }} </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-2">
        <div class="card">
          <div class="card-content">
            <div>
              <p class="heading">Potencia acumulada (W)</p>
              <p class="title"> {{ potAcumulada }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="columns">
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
    <div class="card">
      <div class="card-content">
        <b-field label="Test">
          <b-switch type="is-info" @input="controlLed" v-model="ledControl">Prueba led</b-switch>
        </b-field>
        <b-field>
          <b-tag :type="!ledStatus ? 'is-light' : 'is-warning' " rounded>{{ ledStatus ? 'ON' : 'OFF' }} </b-tag>
        </b-field>
      </div>
    </div> -->
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
      weight: 0,
      ledControl: false,
      ledStatus: false,
      voltCarga: 0,
      voltBatt: 0,
      currCarga: 0,
      potAcumulada: 0
    }
  },
  mounted() {
    this.$socket.on('sensors', data => {
      // this.door = !!parseInt(data.door)
      // this.presence = !!parseInt(data.presence)
      // this.weight = parseFloat(data.weight)
      this.voltCarga = data.ps[5]/10
      this.voltBatt = data.ps[6]/10
      this.currCarga = data.ps[7]/10
      this.potAcumulada = data.ps[18]
    })
    this.$socket.on('actuator', data => {
      this.ledStatus = data
    })
  },
  methods: {
    controlLed() {
      this.axios.post(`${process.env.VUE_APP_BASE_URL}/api/actuator`, {
        led: this.ledControl
      }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
