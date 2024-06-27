# Map

## Creating an empty Map

```
const map = new Map()
console.log(map)
```
```
Map(0) {}
```

## Creating an Map from array

```
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
```

```
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

## Adding values to the Map

```
const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)
```
```
Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
3
```

## Getting a value from Map
```
console.log(countriesMap.get('Finland'))
```
```
Helsinki
```

## Checking key in Map
Check if a key exists in a map using has method. It returns true or false.

```
console.log(countriesMap.has('Finland'))
```
```
true
```

#### Getting all values from map using loop

```
for (const country of countriesMap) {
  console.log(country)
}
```
```
(2) ["Finland", "Helsinki"]
(2) ["Sweden", "Stockholm"]
(2) ["Norway", "Oslo"]
```
```
for (const [country, city] of countriesMap){
 console.log(country, city)
}
```
```
Finland Helsinki
Sweden Stockholm
Norway Oslo
```