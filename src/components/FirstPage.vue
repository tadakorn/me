<template>
  <div class="container">
   <p>HI, EVERYONE (:</p>
   <h1>Welcome to My ....</h1>
   <button type="button" class="btn btn-secondary btn-height">Click Here</button>
   <!-- <i class="fa fa-search"></i> -->
  </div>
   <font-awesome-icon icon="fa-solid fa-arrow-down" class="icon-fa" />
</template>

<script>

</script>

<style scoped>
h1 {
  position: relative;
  z-index: 1;
  font-weight: 700;
  line-height: 1.1;
}
p {
  padding-top: 100px;
}
.fa-arrow-down {
  transition: tranform 0.2s;
}
.fa-arrow-down:hover {
  transform: scale(1.2);
  color: #fff;
}
.btn-height{
  margin-top: 30px;
}
.icon-fa {
  width: 100%;
  padding-top: 70px;
  color: black;
  
}
</style>
