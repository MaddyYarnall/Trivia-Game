import { generateId } from "../Utils/generateId.js"

export class Question{
  constructor(results) {
    this.id = generateId()
    this.difficulty = results.difficulty,
    this.question = results.question,
    this.correct = results.correct_answer,
    this.incorrect = results.incorrect_answers
  }
  get Template(){
    return /*html*/ ` 
      <div class="col-12 p-3">
              <div class="bg-white rounded p-3">
                <h4 w-100>${this.question}</h3>
                <button class="btn btn-success align-items-center true" onclick="app.questionsController.answerButton('${this.id}','True')">TRUE</button>
                <button class="btn btn-danger align-items-center false"onclick="app.questionsController.answerButton('${this.id}','False')">FALSE</button>
              </div>
            </div>
    `
  }
}


