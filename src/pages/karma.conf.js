module.exports = function (config) {
  config.set({
    files: [
      'js/*.js' // เลือกไฟล์ที่ต้องการจะโหลด (ทั้งโค้ดสำหรับทำงานและโค้ดสำหรับ test)
    ],
    frameworks: ['jasmine'], // เลือก framework ที่ใช้ในการเขียน test
    browsers: ['Chrome'], // สามารถใส่ได้หลายตัว เช่น ['Chrome', 'Firefox', 'Safari']
    autoWatch: true // รัน test ใหม่เมื่อไฟล์ที่เลือกมามีการเปลี่ยนแปลง
  })
}
