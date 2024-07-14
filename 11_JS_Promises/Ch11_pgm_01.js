// Callbacks

const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 5000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback);

// as i changed to 5000 it displays after 5 secs.


// after 2 seconds it will print
// It did not go well

