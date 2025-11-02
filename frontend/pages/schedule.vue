<script setup>
import { ref } from 'vue';

// 1. สร้าง "ชุดข้อมูล" สำหรับเก็บรายวิชาทั้งหมด
const courses = ref([
  { id: 1, name: 'CS101: Intro to Programming', room: 'CB2301', day: 'จันทร์', start: '09:00', end: '11:00', color: 'blue' },
  { id: 2, name: 'MA112: Calculus I', room: 'SC4503', day: 'อังคาร', start: '13:00', end: '15:00', color: 'green' },
  { id: 3, name: 'CS101: Intro to Programming', room: 'CB2301', day: 'พฤหัสบดี', start: '09:00', end: '11:00', color: 'blue' },
  { id: 4, name: 'EN101: Academic Writing', room: 'LA1205', day: 'พฤหัสบดี', start: '14:00', end: '16:00', color: 'yellow' },
]);

// 2. สร้างตัวแปรสำหรับแปลง "วัน" และ "เวลา" เป็นตำแหน่งใน Grid
const dayToRow = { 'จันทร์': 2, 'อังคาร': 3, 'พุธ': 4, 'พฤหัสบดี': 5, 'ศุกร์': 6 };
const timeToCol = {
  '08:00': 2, '09:00': 3, '10:00': 4, '11:00': 5, '12:00': 6, '13:00': 6, '14:00': 7, 
  '15:00': 8, '16:00': 9, '17:00': 10, '18:00': 11, '19:00': 12, '20:00': 13
};
const colorVariants = {
    blue: 'bg-blue-100 border-blue-300 text-blue-800',
    green: 'bg-green-100 border-green-300 text-green-800',
    yellow: 'bg-yellow-100 border-yellow-300 text-yellow-800',
    red: 'bg-red-100 border-red-300 text-red-800'
};

// 3. ฟังก์ชันสำหรับคำนวณ Style ของการ์ดแต่ละอัน
const getCourseStyle = (course) => {
  const row = dayToRow[course.day];
  const startCol = timeToCol[course.start];
  const endCol = timeToCol[course.end];
  
  return {
    'grid-row-start': row,
    'grid-column': `${startCol} / ${endCol}` // กำหนดการวางแบบ start/end
  };
};

// 4. ฟังก์ชันสำหรับเพิ่มวิชา (ตัวอย่าง)
const addCourse = () => {
  const newCourse = {
    id: Date.now(), // ใช้วันที่ปัจจุบันเป็น ID ชั่วคราว
    name: 'New Course',
    room: 'TBA',
    day: 'ศุกร์',
    start: '10:00',
    end: '12:00',
    color: 'red'
  };
  courses.value.push(newCourse);
};

// 5. ฟังก์ชันสำหรับลบวิชา
const deleteCourse = (courseId) => {
  courses.value = courses.value.filter(c => c.id !== courseId);
};

</script>

<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-800">ตารางเรียน</h1>
      <button @click="addCourse" class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
        + เพิ่มวิชา
      </button>
    </div>

    <div class="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      <div class="relative grid" style="grid-template-columns: auto repeat(12, 1fr);">
        
        <div class="border-r border-b border-gray-200"></div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">08:00-09:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">09:00-10:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">10:00-11:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">11:00-12:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">13:00-14:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">14:00-15:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">15:00-16:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">16:00-17:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">17:00-18:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">18:00-19:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">19:00-20:00</div>
        <div class="font-bold text-center border-b border-gray-200 p-3 text-sm">20:00-21:00</div>

        <div class="row-start-2 border-r border-b border-gray-200 p-4 font-bold text-center">จันทร์</div>
        <div class="row-start-3 border-r border-b border-gray-200 p-4 font-bold text-center">อังคาร</div>
        <div class="row-start-4 border-r border-b border-gray-200 p-4 font-bold text-center">พุธ</div>
        <div class="row-start-5 border-r border-b border-gray-200 p-4 font-bold text-center">พฤหัสบดี</div>
        <div class="row-start-6 border-r border-b border-gray-200 p-4 font-bold text-center">ศุกร์</div>
        
        <div v-for="i in 5" :key="`row-${i}`" :style="{ 'grid-row': i + 1 }" class="col-start-2 col-span-12 grid grid-cols-12">
            <div v-for="j in 12" :key="`cell-${j}`" class="border-r border-b border-gray-200 h-24"></div>
        </div>

        <div 
          v-for="course in courses" 
          :key="course.id"
          :style="getCourseStyle(course)"
          :class="colorVariants[course.color]"
          class="relative z-10 m-1 p-2 border rounded-lg flex flex-col justify-center text-center group"
        >
          <p class="font-bold">{{ course.name }}</p>
          <p class="text-sm">📍 {{ course.room }}</p>

          <button 
            @click="deleteCourse(course.id)"
            class="absolute top-1 right-1 h-5 w-5 bg-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            &#x2715;
          </button>
        </div>

      </div>
    </div>
  </div>
</template>