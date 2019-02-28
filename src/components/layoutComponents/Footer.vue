<template>
  <footer>
    <div class="uk-container-expand footer">
      <div class="uk-container wrapper">
        @2019 Javier Asperilla
        <div class="right-icons">
          <a href="https://www.linkedin.com/in/javierasperilla/?locale=es_ES"><i class="fa fa-linkedin" area-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'app-footer'
}
</script>

<style scoped>
  .footer {
    background-color: #eef1ef;
  }
  .wrapper {
    padding: 5px;
  }
  .right-icons {
    float: right;
  }
  .right-icons i {
    padding: 0 10px 0 0;
    color: black;
  }
  .right-icons i:hover {
    color: grey;
  }
</style>
