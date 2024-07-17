// Promise constructor

// syntax

// const promise = new Promise((resolve, reject) => {
//     resolve('success')
//     reject('failure')
//   })

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))

  //when I delete the array element it display after 2 secs as something went wrong shown in the else part.



    // ["HTML", "CSS", "JS"]