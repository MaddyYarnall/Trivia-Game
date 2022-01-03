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

function answerButton(){

}

}

export const questionsService = new QuestionsService() 