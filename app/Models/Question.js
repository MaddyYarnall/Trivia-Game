

export class Question{
  constructor(results) {
    this.difficulty = results.difficulty,
    this.question = results.question,
    this.correct = results.correct_answer,
    this.incorrect = results.incorrect_answers
  }
  get Template(){
    return `
      <div class="col-4 p-3">
              <div class="bg-white rounded p-3">
                <h4 w-100>${this.question}</h3>
                <button class="btn btn-success align-items-center true">TRUE</button>
                <button class="btn btn-danger align-items-center false">FALSE</button>
              </div>
            </div>
    `
  }
}


