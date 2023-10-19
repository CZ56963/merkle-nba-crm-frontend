<script setup lang="ts">
defineOptions({
  name: "Welcome"
});
</script>

<template>
  <el-container fluid class="shadow py-2 bg-white" style="display: block">
    <el-row>
      <div class="m-3">
        <h2 class="m-3">短信模板:</h2>
        <div class="m-2 ml-3">
          <p>
            - 通过点击页面左侧模版消息中的模版管理可以查看该账户下所有的短信模版
          </p>
          <img
            src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230110/136d4dd0-3bff-4247-8191-bee40a421337.png"
            class="ml-3"
          />
          <p class="mt-12">
            -
            如有新申请的模版，请通过模版管理页面右上角的同步模版按钮进行模版同步
          </p>
          <img
            src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230110/b87553e4-2eb0-469d-88f0-a3834378c439.png"
            class="ml-3"
            style="max-width: 60%"
          />
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="m-3">
        <h2 class="m-3 mt-12">创建消息任务:</h2>
        <div class="m-2 ml-3">
          <p class="mt-3">
            -
            通过点击页面左侧“模版消息”中的“消息任务”，进入页面后点击右上角“新增消息任务”进入创建消息任务界面
          </p>
          <img
            src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230110/b4bc2276-86d8-4af0-b9f2-98c064cdf6ca.png"
            class="ml-3"
            style="max-width: 60%"
          />
          <p class="mt-12">
            - 在“任务对象设置”处可以选择通过文件发送或者通过指令发送
          </p>
          <img
            src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230110/f57358ba-726a-4df8-8084-77683e370fb7.png"
            class="ml-3"
            style="max-width: 60%"
          />
          <div class="m-2 mt-12">
            <h3 class="mt-12">> 文件发送</h3>
            <p class="mt-12">
              - 创建一个csv文件并附上用户手机号码或者customer
              ID，与所需的模版参数
            </p>
            <p class="mt-12">
              -
              第一行的第一列可以选择填写”phoneNumber“或者“customer_id“，如选择”customer_id“，此次发送任务将会通过LoyaltyPlus接口获取用户手机号。
            </p>
            <img
              src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230111/db448bf5-b710-4775-a847-9ac31415132f.png"
              class="ml-3"
              style="max-width: 60%"
            />
            <p class="mt-12">
              -
              第一行的第二列开始是选中短信模版的参数名称，短信模板样例将会在选在模版消息后出现，您可通过样例来获取模板参数名称。若该模版无参数便只需要在csv文件中添加第一列。
            </p>
            <img
              src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230111/bb2a02ad-bc7el-41c7-9641-4913f5adf8e4.png"
              class="ml-3"
              style="max-width: 60%"
            />
          </div>
          <div class="m-2">
            <h3 class="mt-12">> 指令发送</h3>
            <p class="mt-12">
              -
              在任务对象文本框内输入用户手机号，通过换行来区分手机号，并且一行只能有一个号码
            </p>
            <img
              src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230111/caef17cd-8b87-4001-bf89-e11e0d6a24a8.png"
              class="ml-3"
              style="max-width: 60%"
            />
            <p class="mt-12">
              -
              在内容设置文本框内输入短信模板对应参数名称和内容，格式为：参数名称1A:参数内容1A,参数名称1B:参数内容1B（换行输入第二个手机号的参数）。若该模版并无参数，则不需要填写。
            </p>
            <img
              src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230111/5c491f85-b0ca-460a-9328-f82105e100ad.png"
              class="ml-3"
              style="max-width: 60%"
            />
          </div>
          <div class="m-2">
            <h3 class="mt-12">> 指令发送</h3>
            <p class="mt-12">
              -
              在任务对象文本框内输入用户手机号，通过换行来区分手机号，并且一行只能有一个号码
            </p>
            <img
              src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230111/caef17cd-8b87-4001-bf89-e11e0d6a24a8.png"
              class="ml-3"
              style="max-width: 60%"
            />
            <p class="mt-12">
              -
              在内容设置文本框内输入短信模板对应参数名称和内容，格式为：参数名称1A:参数内容1A,参数名称1B:参数内容1B（换行输入第二个手机号的参数）。若该模版并无参数，则不需要填写。
            </p>
            <img
              src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230111/5c491f85-b0ca-460a-9328-f82105e100ad.png"
              class="ml-3"
              style="max-width: 60%"
            />
          </div>
          <div class="m-2">
            <h3 class="mt-12">> 设置消息签名</h3>
            <p class="mt-12">- 每个消息任务需设置一个消息签名</p>
            <img
              src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230111/caef17cd-8b87-4001-bf89-e11e0d6a24a8.png"
              class="ml-3"
              style="max-width: 60%"
            />
          </div>
          <div class="m-2">
            <h3 class="mt-12">> 短信预览</h3>
            <p class="mt-12">
              - 设置好消息签名与消息模版后，可用短信预览发送短信到指定任务对象。
            </p>
            <img
              src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230115/c94abe76-6922-4db3-85c1-9693f9d63025.png"
              class="ml-3"
              style="max-width: 60%"
            />
          </div>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="m-3 mt-12">
        <h2 class="m-3">短信任务执行:</h2>
        <div class="m-2 ml-3 mt-12">
          <p class="mt-12">
            - 等任务状态变为“待处理”时，通过点击执行按钮来进行短信发送
          </p>
          <img
            src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230115/0c6fd952-edd2-4123-b492-6e1a0314d528.png"
            class="ml-3"
            style="max-width: 60%"
          />
          <p class="mt-12">- 指定审核者，进行短信验证码确认后短信开始发送</p>
          <img
            src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230115/350803c9-ddf7-4888-a378-a4a79638e169.png"
            class="ml-3"
            style="max-width: 60%"
          />
          <p class="mt-12">
            -
            通过点击任务名称查看消息任务详情，该详情只显示发送状态为失败或者未发送的子任务。
          </p>
          <img
            src="https://cdn-lp-cn1-cms-production.merklechina.com/crm/image/20230115/a29ebf5f-a60f-4da4-988e-24334612c475.png"
            class="ml-3"
            style="max-width: 60%"
          />
        </div>
      </div>
    </el-row>
  </el-container>
</template>
