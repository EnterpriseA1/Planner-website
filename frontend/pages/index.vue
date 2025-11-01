<template>
  <div class="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
    <main class="flex-1 flex flex-col items-center justify-center">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        จัดการชีวิตมหา'ลัย<span class="text-blue-600">ให้ง่ายขึ้น</span>
      </h1>
      <p class="mt-4 max-w-2xl text-lg text-gray-500">
        UniLife Planner คือเครื่องมือที่จะช่วยคุณจัดระเบียบตารางเรียน, การบ้าน, และเป้าหมายส่วนตัว ทั้งหมดในที่เดียว เพื่อให้คุณโฟกัสกับสิ่งที่สำคัญที่สุดได้
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <NuxtLink
          to="/register"
          class="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          เริ่มต้นใช้งานฟรี
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-transform transform hover:scale-105"
        >
          เข้าสู่ระบบ
        </NuxtLink>
      </div>
    </main>
  </div>
</template>