// @ts-ignore
export const hpApi = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=boolean',
  timeout: 3000
})

