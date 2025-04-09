const getExperienceYear = () => {
  const date = new Date()

  return `${date.getFullYear() - 2022 - 1}-${date.getFullYear() - 2022 - 1 + 1}`
}

export default getExperienceYear
