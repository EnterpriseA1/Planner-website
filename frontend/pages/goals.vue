<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-800">เป้าหมายของฉัน</h1>
      <button class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
        + สร้างเป้าหมายใหม่
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h3 class="font-bold text-lg text-gray-800">เกรดเฉลี่ย 3.5+ ในเทอมนี้</h3>
        <p class="text-sm text-gray-500">ตั้งใจเรียนและส่งงานให้ครบทุกชิ้นเพื่อทำเกรดให้ถึงเป้า</p>
        
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium text-gray-700">ความคืบหน้า</span>
            <span class="text-sm font-medium text-gray-700">50%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-yellow-400 h-2.5 rounded-full" style="width: 50%"></div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h3 class="font-bold text-lg text-gray-800">ทำโปรเจกต์ส่วนตัวให้เสร็จ</h3>
        <p class="text-sm text-gray-500">พัฒนาเว็บแอปพลิเคชันสำหรับจัดการงานอดิเรกของตัวเอง</p>
        
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium text-gray-700">ความคืบหน้า</span>
            <span class="text-sm font-medium text-gray-700">80%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-green-500 h-2.5 rounded-full" style="width: 80%"></div>
          </div>
        </div>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h3 class="font-bold text-lg text-gray-800">เรียนรู้ Vue.js และ Nuxt.js</h3>
        <p class="text-sm text-gray-500">ศึกษา Document และทำ Tutorial ให้เข้าใจพื้นฐานทั้งหมด</p>
        
        <div>
          <div class="flex justify-between mb-1">
            <span class="text-sm font-medium text-gray-700">ความคืบหน้า</span>
            <span class="text-sm font-medium text-gray-700">25%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-red-500 h-2.5 rounded-full" style="width: 25%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>