export default {
  en: {
    messages: {
      required (field) {
        return field + 'must be entered'
      },
      min (field, args) {
        console.log(args)
        return field + ' at least '
      }
    },
    attributes: {
      name: 'Name',
      surname: 'Surname'
    }
  },
  th: {
    messages: {
      required (field) {
        return 'ต้องป้อน ' + field + ' นะ'
      },
      min (field) {
        return 'ต้องป้อน อย่างน้อย ' + field + ' นะ'
      }
    },
    attributes: {
      name: 'ชื่อ',
      surname: 'นามสกุล'
    }
  }
}
