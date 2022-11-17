import { SNSEvent } from 'aws-lambda'
import { Context } from 'telegraf'

export const handler = (event: SNSEvent, context: Context) => {
  const records = event.Records

  records.map((record) => {
    let recordMessage = record.Sns.Message
    console.log(JSON.parse(recordMessage))
  })
}
