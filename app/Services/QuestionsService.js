import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { hpApi } from "./AxiosService.js"

class QuestionsService{
async getAllQuestions(){
  let res = await hpApi.get('')
  console.log(res)
  let questions = res.data.results.map(q => new Question(q))
  ProxyState.questions = questions
}

answerButton(id, guess){
let found = ProxyState.questions.find(q => q.id == id)
console.log(found)
if (found.correct == guess){
  console.log('yay')
  alert('That is Correct!')
}else{
  alert('Wrong! Try again!')
}

}
}
export const questionsService = new QuestionsService() 