<template>
  <footer>
    <div class="uk-container-expand footer">
      <div class="uk-container wrapper">
        @2019 Adrian Saiz - Javier Asperilla
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
    background-color: #373F51;
  }
  .wrapper {
    padding: 5px;
  }
  .right-icons {
    float: right;
  }
  .right-icons i {
    padding: 0 10px 0 0;
    color: white;
  }
  .right-icons i:hover {
    color: white;
  }
</style>
