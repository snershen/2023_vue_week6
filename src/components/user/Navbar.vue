<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LOGO</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <RouterLink to="/products" class="nav-link">密室主題</RouterLink>
          <RouterLink to="/question" class="nav-link">常見問題</RouterLink>
          <RouterLink to="/about" class="nav-link">關於我們</RouterLink>
          <!-- <a  href="#" class="nav-link">預約記錄</a> -->
          <RouterLink to="/login" class="nav-link">登入後台</RouterLink>
          <RouterLink to="/admin" class="nav-link">進入後台</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
