// Callbacks

// In this case the err is false and it will return the else block which is the result.

const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(false, skills)
    }, 2000)
  }
  
  doSomething((err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  })


// after 2 seconds it will print the skills
// ["HTML", "CSS", "JS"]