const knex = require('./db')

console.log('knex breakout!!')

// knex.raw('SELECT * FROM cohorts')
// .then((data) => {
//   console.log(data)
// })
//
// knex('students')
// .then((data) => {
//   const newData = data.filter((element) => element.cohort_id === '1')
//   console.log(newData)
// })

// knex('students')
// .where({id: 1})
// .update({name: 'Joseph'})
//
// .then((data) => {
//   console.log(data)
//   return knex('students')
// })
// .then((data) => {
//   console.log(data)
//   return data
// })
//
// knex('students')
// .where({name: 'Steve'})
// .update({cohort_id: '2'})
// .update({name: 'Steven'})
//
// .then((data) => {
//   console.log(data)
//   return knex('students')
// })
// .then((data) => {
//   console.log(data)
//   return data
// })


// DELETION TIME
// knex('students')
// .del()
// .where({name: 'Steven'})
//
// .then((data) => {
//   console.log(data)
//   return knex('students')
// })
// .then((data) => {
//   console.log(data)
//   return data
// })
//
// knex('students')
// .insert({name: 'Mossy', cohort_id: '2'})
//
// .then((data) => {
//   console.log(data)
//   return knex('students')
// })
// .then((data) => {
//   console.log(data)
//   return data
// })

const newCohort = {name: 'stranger things', desc: 'on netfilx'}
const newStudent = {name: 'Bob'}
const cohortName = 'Stranger Things'

knex('cohorts')
.insert(newCohort)
.where({name: 'Stranger Things'})

.then((data) => {
  if(data.length == 1) {
    newStudent.cohort_id = data[0].id
    console.log(newStudent)
    return knex('students').insert(newStudent)
  } else {
    throw new Error('no such cohort')
  }
})
.then((data) => {
  console.log(data)
  return knex('students')
})
.then(console.log)
.catch(console.log)
