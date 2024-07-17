// Callbacks

// In this case the err is false and it will return the else block which is the result.

const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 4000)
}

doSomething((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})

//as i changed time to 4000 it displays after 4 secs.


// after 2 seconds it will print the skills
// ["HTML", "CSS", "JS"]