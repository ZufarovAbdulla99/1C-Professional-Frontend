export interface Section {
  id: string
  code: number
  title: string
}

export interface Answer {
  id?: string
  text: string
  answer_order: number
  is_correct?: boolean
}

export interface Question {
  id?: string
  section_id: string
  question_number: string
  text: string
  image_url?: string | null
  answers: Answer[]
}

export interface QuestionJSON {
  section_code: number
  question_number: string
  text: string
  image_url?: string
  answers: {
    answer_order: number
    text: string
    is_correct?: boolean
  }[]
}