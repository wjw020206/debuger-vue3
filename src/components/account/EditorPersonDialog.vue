<script setup lang="ts">
const dialogVisible = ref(false);
/**用户姓名 */
const userName = ref();
/** 邮箱 */
const email = ref();
/**头像 */
const face = ref('/src/assets/images/common/avatar.jpg');
/**生日 */
const birthday = ref();
/**性别 */
const gender = ref();
/**个人简介 */
const intro = ref();

defineExpose({
  dialogVisible
});
</script>

<template>
  <div>
    <el-dialog v-model="dialogVisible" title="个人设置" width="50%">
      <template #default>
        <div class="flex gap-[30px]">
          <div class="w-[35%]">
            <div>名字</div>
            <base-input v-model="userName" />
          </div>

          <div class="w-[55%]">
            <div>邮箱</div>
            <base-input v-model="email" />
          </div>
        </div>
        <div></div>
        <div class="mt-[15px]">
          <div>头像</div>
          <div>
            <el-row>
              <el-col>
                <div>
                  <el-avatar :size="150" :src="face"> </el-avatar>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="flex gap-[30px] mt-[15px]">
          <div class="w-[35%]">
            <div>生日</div>
            <div>
              <el-date-picker
                v-model="birthday"
                type="date"
                placeholder="请选择您的生日"
              />
            </div>
          </div>
          <div>
            <div>性别</div>
            <div>
              <el-select v-model="gender" placeholder="请选择您的性别">
                <el-option label="男" value="0" />
                <el-option label="女" value="1" />
              </el-select>
            </div>
          </div>
        </div>
        <div class="mt-[10px]">
          <div>个人简介</div>
          <div>
            <base-input type="textarea" v-model="intro"></base-input>
          </div>
        </div>
      </template>
      <template #footer>
        <base-button class="btn-chancel">取消</base-button>
        <base-button class="btn-confirm">确定</base-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.btn-chancel {
  width: 100px;
  height: 36px;
  color: #fff;
  background: rgba(0, 0, 0, 0.18);
}

.btn-confirm {
  @extend .btn-chancel;
  background: #0473ff;
}
</style>
