<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";
import { storageSession } from "@pureadmin/utils";
import SelectChannel from "@/views/component/dialog/selectChannel.vue";
import { ref } from "vue";
const props = defineProps({
  collapse: Boolean
});

const { title } = useNav();
const storage = storageSession();
const channel_id = storage.getItem("channel_id");
const channels: any = storage.getItem("channels");
const selectedChannel = (): any => {
  let result: any = {};
  channels.forEach(element => {
    if (element.id == channel_id) {
      result = element;
    }
  });
  return result;
};
const formDialogVisible = ref(false);
console.log(selectedChannel().headImg);
</script>

<template>
  <div class="sidebar-logo-container" :class="{ collapses: props.collapse }">
    <transition name="sidebarLogoFade">
      <div
        v-if="props.collapse"
        key="props.collapse"
        :title="title"
        class="sidebar-logo-link"
        @click="formDialogVisible = true"
      >
        <img :src="selectedChannel().headImg" alt="logo" />
        <span class="sidebar-title">{{ selectedChannel().nickName }}</span>
      </div>
      <div
        v-else
        key="expand"
        :title="title"
        class="sidebar-logo-link"
        @click="formDialogVisible = true"
      >
        <img :src="selectedChannel().headImg" alt="logo" />
        <span class="sidebar-title">{{ selectedChannel().nickName }}</span>
      </div>
    </transition>
    <SelectChannel
      v-model:visible="formDialogVisible"
      :selectedChannel="selectedChannel()"
      :channels="channels"
    />
  </div>
</template>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 48px;
  overflow: hidden;

  .sidebar-logo-link {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 100%;

    img {
      display: inline-block;
      height: 32px;
    }

    .sidebar-title {
      display: inline-block;
      height: 32px;
      margin: 2px 0 0 12px;
      overflow: hidden;
      font-size: 16px;
      font-weight: 600;
      line-height: 32px;
      color: $subMenuActiveText;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
