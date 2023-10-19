<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import type { FormInstance } from "element-plus";
import { storageSession } from "@pureadmin/utils";
const storage = storageSession();

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  selectedChannel: {
    type: Object,
    default: () => {
      return {};
    }
  },
  channels: {
    type: Array,
    default: () => {
      return [];
    }
  }
});

const data = reactive({
  selectedChannel: props.selectedChannel
});

const dialogVisible = ref(false);
const ruleFormRef = ref<FormInstance>();

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const closeDialog = () => {
  dialogVisible.value = false;
  resetForm(ruleFormRef.value);
};
const selectChannel = (channel: Object) => {
  data.selectedChannel = channel;
};
const confirmChannel = () => {
  storage.setItem("channel_id", data.selectedChannel);
  dialogVisible.value = false;
};

watch(
  () => props.visible,
  val => {
    dialogVisible.value = val;
  }
);

const emit = defineEmits(["update:visible"]);
watch(
  () => dialogVisible.value,
  val => {
    emit("update:visible", val);
  }
);
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    title="选择渠道"
    width="30%"
    :before-close="closeDialog"
    center
  >
    <el-container>
      <el-row
        v-for="(channel, index) in channels"
        :key="index"
        :class="{ selected: channel.selected }"
        :align="'middle'"
        :justify="'center'"
        class="border mb-3 rounded p-2 channel-selectec-item"
        @click="selectChannel(channel)"
        no-gutters
      >
        <el-col :sm="5"><el-image :src="channel.headImg" fluid /></el-col>
        <el-col :sm="12" class="pl-2 text-truncate text-dark">{{
          channel.nickName
        }}</el-col>
      </el-row>
    </el-container>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" @click="confirmChannel"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.channel-selectec-item {
  position: relative;
  &:hover {
    transform: scale(0.99);
    cursor: pointer;
  }
  &.selected {
    &::before {
      content: "\f058";
      font-family: FontAwesome;
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      color: #e4e8ea;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
