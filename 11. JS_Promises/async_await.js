// Async and await is an elegant way to handle promises. It is easy to understand and it clean to write.

// const square = async function (n) {
//     return n * n
//   }
  
//   square(2)

//   Promise {<resolved>: 4}



// The word async in front of a function means that function will return a promise. 
// The above square function instead of a value it returns a promise.

// How do we access the value from the promise? 
// To access the value from the promise, we will use the keyword await.


const square = async function (n) {
    return n * n
  }
  const value = await square(2)
  console.log(value)

// 4


// Let us fetch API data using both promise method and async and await method.

// promise

const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))


//  async and await

const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()