<template>
  <div
    style="width: 100%;height: 100%"
    class="bs-design-wrap"
  >
    <dv-border-box-3
      :id="'dataV' + code"
      :key="updateKey"
      :color="color"
      :background-color="colorType === 'single' ? backgroundColor : `url(#${borderBgId})`"
    />
  </div>
</template>
<script>
import { refreshComponentMixin } from 'data-room-ui/js/mixins/refreshComponent'
import { dataVMixins } from 'data-room-ui/js/mixins/dataVMixins'
import DvBorderBox3 from '@jiaminghi/data-view/lib/components/borderBox3/src/main.vue'
import '@jiaminghi/data-view/lib/components/borderBox3/src/main.css'
export default {
  name: 'Border3',
  components: {
    DvBorderBox3
  },
  mixins: [refreshComponentMixin, dataVMixins],
  computed: {},
  watch: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.bs-design-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 4px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.title-box {
  height: 40px;
  padding: 10px 10px 0 0;
  box-sizing: border-box;

  .title {
    font-size: 14px;
    color: #333;
    font-weight: bold;
    border-left: 3px solid var(--bs-el-color-primary);
    padding-left: 16px;
  }

  .target-value {
    overflow-y: auto;
    height: 60px;
    font-weight: bold;
    width: 100%;
    font-size: 20px;
    color: #333;
    padding: 16px 0 0 22px;
    box-sizing: border-box;
  }
}

.el-icon-warning {
  color: #FFD600;
}

.title-hover {
  &:hover {
    cursor: move;
  }
}

/*滚动条样式*/
::v-deep ::-webkit-scrollbar {
  width: 4px;
  border-radius: 4px;
  height: 4px;
}

::v-deep ::-webkit-scrollbar-thumb {
  background: #dddddd !important;
  border-radius: 10px;
}</style>
