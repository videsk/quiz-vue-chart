<template>
  <div id="app">
    <div id="chart" style="width: 640px; height: 480px;"></div>
    <div class="docs-frappe" @click="openDocs">Frappe Docs</div>
  </div>
</template>

<script>
import { Chart } from 'frappe-charts/dist/frappe-charts.esm.js';
import 'frappe-charts/dist/frappe-charts.min.css';

export default {
  name: 'App',
  data: () => ({
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
    ],
    datasets: [
        {
            name: "Some Data", type: "bar",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        },
        {
            name: "Another Set", type: "line",
            values: [25, 50, -10, 15, 18, 32, 27, 14]
        }
    ],
  }),
  mounted() {
    const el = document.querySelector('#chart');
    const chart = new Chart(el, {  // or a DOM element,
        title: "My Awesome Chart",
        data: { labels: this.labels, datasets: this.datasets },
        type: 'axis-mixed', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
        height: el.clientWidth,
        colors: ['#7cd6fd', '#743ee2']
    });
  },
  methods: {
    openDocs() {
      window.open('https://frappe.io/charts/docs', '_blank');
    }
  }
}
</script>

<style>
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.docs-frappe {
  width: auto;
  display: flex;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #3199d8;
  text-decoration: underline;
  cursor: pointer;
}

</style>
