<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center text-center space-y-6">
    <h1 class="text-4xl font-bold text-blue-600">🎓 UniLife Planner</h1>
    <p class="text-gray-500">จัดการตารางเรียน การบ้าน และเป้าหมายได้ง่ายในที่เดียว</p>

    <div class="flex gap-4">
      <NuxtLink to="/login" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        เข้าสู่ระบบ
      </NuxtLink>
      <NuxtLink to="/register" class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
        สมัครสมาชิก
      </NuxtLink>
    </div>
  </div>
</template>