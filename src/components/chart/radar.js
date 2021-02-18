import { Radar, mixins } from 'vue-chartjs'
// const { reactiveProp } = mixins

export default {
  extends: Radar,
//   mixins: [reactiveProp],
  props: ['chartData', 'options'],
  mounted () {
    this.renderChart(this.chartData, {...this.options, responsive: true});
  },
  watch: {
    chartData: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        // this.renderChart(this.chartData, this.options)
        
        if (this.$data._chart) {
          this.$data._chart.data = newValue;
          this.$data._chart.update();
        }
        
      }
    }
  }
}