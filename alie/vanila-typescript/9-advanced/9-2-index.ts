{
  const obj = {
    name: 'ellie'
  }

  type Animal = {
    name: string
    age: number
    gender: 'male' | 'female'
  }

  type Name = Animal['name']; // string
  type Gender = Animal['gender']

  const key: keyof Animal = 'name' // 'name' | 'age' | 'gender'
}