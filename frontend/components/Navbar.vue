<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-end  h-16 ">
        <NuxtLink to="/" class="flex items-center gap-2 ">
          <span class="text-xl font-bold text-blue-600 ">🎓 UniLife Planner</span>
        </NuxtLink>

        <div class="hidden md:flex items-center space-x-8 ml-20 mr-auto">
          <NuxtLink to="/schedule" class="text-gray-600 hover:text-blue-600 transition-colors">
            ตารางเรียน
          </NuxtLink>
          <NuxtLink to="/tasks" class="text-gray-600 hover:text-blue-600 transition-colors">
            การบ้าน
          </NuxtLink>
          <NuxtLink to="/goals" class="text-gray-600 hover:text-blue-600 transition-colors">
            เป้าหมาย
          </NuxtLink>
        </div>

        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/login"
            class="hidden sm:inline-block px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            เข้าสู่ระบบ
          </NuxtLink>
          <NuxtLink
            to="/register"
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            สมัครสมาชิก
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>