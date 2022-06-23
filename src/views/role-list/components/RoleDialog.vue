<template>
  <el-dialog :title="$t('msg.excel.roleDialogTitle')" :model-value="showRoleDialog" @close="handleRoleCancel">
    内容

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleRoleCancel">{{ $t('msg.universal.cancel') }}</el-button>
        <el-button type="primary" @click="handleRoleConfirm">{{ $t('msg.universal.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  showRoleDialog: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['update:showRoleDialog'])

// 确定
const handleRoleConfirm = async () => {
  handleRoleCancel()
}
// 关闭
const handleRoleCancel = () => {
  emits('update:showRoleDialog', false)
}
</script>
