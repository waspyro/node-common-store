export const getLastArg = args => args[args.length-1]

export const transformObjectValues = (transformer, O) => {
  for(const key in O) O[key] = transformer(O[key])
  return O
}

export const valuesToObject = (keys, values) => {
  const O = {}
  for(let i = 0; i < values.length; i++) O[keys[i]] = values[i]
  return O
}

export const objectToArray = O => {
  const a = []
  for(const key in O) a.push(key, O[key])
  return a
}

export const decodeObject = decoder => O => {
  for(const key in O) O[key] = decoder(O[key])
  return O
}

export const decodeArr = decoder => A => A.map(el => decoder(el))