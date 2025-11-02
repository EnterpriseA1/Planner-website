<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-800">การบ้านและงานที่ต้องทำ</h1>
      <button class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
        + เพิ่มงาน
      </button>
    </div>

    <div class="space-y-4">
      <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <input type="checkbox" class="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <div>
            <p class="font-semibold text-gray-800">ทำแบบฝึกหัดบทที่ 3</p>
            <span class="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">CS101</span>
          </div>
        </div>
        <div>
          <span class="text-sm font-medium text-red-600">ส่งพรุ่งนี้</span>
        </div>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <input type="checkbox" class="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <div>
            <p class="font-semibold text-gray-800">อ่านบทความวิจัย 2 เรื่อง</p>
            <span class="text-sm font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">EN101</span>
          </div>
        </div>
        <div>
          <span class="text-sm text-gray-500">ส่งใน 3 วัน</span>
        </div>
      </div>

      <div class="bg-gray-100 p-4 rounded-lg flex items-center justify-between opacity-60">
        <div class="flex items-center space-x-4">
          <input type="checkbox" checked class="h-6 w-6 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <div>
            <p class="font-semibold text-gray-800 line-through">แก้โจทย์แคลคูลัสชุดที่ 1</p>
            <span class="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">MA112</span>
          </div>
        </div>
        <div>
          <span class="text-sm text-green-600">ส่งแล้ว</span>
        </div>
      </div>
    </div>
  </div>
</template>