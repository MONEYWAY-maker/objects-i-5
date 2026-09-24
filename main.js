function getAverageOfElements(obj, key) {
  const value = obj[key];

  if (!Array.isArray(value) || value.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum += value[i];
  }

  return sum / value.length;
}
