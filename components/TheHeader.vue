<template>
  <div>
    <div class="header">
      <div class="content w-full">
        <div class="p-4 w-full">
          <div class="flex justify-content-between align-items-center w-full">
            <div>
              <img src="/images/imagen1.png" class="img" width="50" height="50" alt="Image Text">
            </div>
            <div class="flex">
              <div>
                <img src="/images/face.png" class="img" width="50" height="50" alt="Image Text">
              </div>
              <div>
                <img src="/images/twit.png" class="img" width="50" height="50" alt="Image Text">
              </div>
              <div>
                <img src="/images/link.png" class="img" width="50" height="50" alt="Image Text">
              </div>
              <div>
                <Button class="p-button-outlined p-button-rounded green bc" label="Sign in" />
              </div>
              <div>
                <Button type="button" class="img p-button-text p-button-success">
                  <img alt="logo" src="/images/spain.png" style="width: 1.5rem">
                  <span class="ml-2 font-bold">Spanish</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scope>
  .p-button {
    background: #578D6F!important;
  }
  .green {
    border-color: #578D6F!important;
    background-color: #fff!important;
    color: #578D6F!important;
  }
  .bc {
    background-color: #fff!;
    margin-top: -18px;
    margin-right: 20px;
  }
  .img {
    margin-top: -18px;
    margin-right: 20px;
    color: #fff!important;
  }
  .header {
    height: 60px;
    width: 100%;
    background-color: #578D6F;
    color: #fff;
    display: flex;
    justify-content: center;
  }
</style>
