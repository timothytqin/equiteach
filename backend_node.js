const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

async function getItem(params) {
  try {
    const data = await docClient.get(params).promise()
    return data
  }
  catch (err) {
    return err
  }
}

async function queryItem(params) {
  try {
    const data = await docClient.query(params).promise()
    return data
  }
  catch (err) {
    return err
  }
}

async function putItem(params) {
  try {
    const data = await docClient.put(params).promise()
    return data
  }
  catch (err) {
    return err
  }
}

async function updateItem(params) {
  try {
    const data = await docClient.update(params).promise()
    return data
  }
  catch (err) {
    return err
  }
}

exports.handler = async(event) => {
  const http = event.requestContext.http;
  if (http.method == "GET") {
    switch (http.path) {
      case "/getUserInfo":
        {
          const name = event.queryStringParameters.username;

          console.log(name)

          const params = {
            TableName: 'Tutor',
            KeyConditionExpression: 'PK = :pk',
            ExpressionAttributeValues: {
              ':pk': name,
            },
            ScanIndexForward: false
          }

          try {
            const data = await queryItem(params)
            console.log(data)
            return { body: data.Items[0] }
          }
          catch (err) {
            return { error: err }
          }
        }

      case "/getTutorSessions":
        {
          const name = event.queryStringParameters.username;

          const params = {
            TableName: 'Tutor',
            KeyConditionExpression: 'PK = :pk and begins_with(SK, :sk)',
            ExpressionAttributeValues: {
              ':pk': name,
              ':sk': "Session#"
            }
          }

          try {
            const data = await queryItem(params)
            return { body: data.Items }
          }
          catch (err) {
            return { error: err }
          }
        }

      case "/getStudentSessions":
        {
          const name = event.queryStringParameters.username;

          const params = {
            TableName: 'Tutor',
            IndexName: 'GS1',
            KeyConditionExpression: 'GS1_PK = :pk',
            ExpressionAttributeValues: {
              ':pk': "Session#" + name,
            }
          }

          console.log(params)

          try {
            const data = await queryItem(params)
            return { body: data.Items }
          }
          catch (err) {
            return { error: err }
          }
        }

      case "/getActiveTutorsForSubject":
        {
          const subject = event.queryStringParameters.subject;

          const params = {
            TableName: 'Tutor',
            IndexName: 'GS1',
            KeyConditionExpression: 'GS1_PK = :pk',
            FilterExpression: 'contains (subjects, :subject)',
            ExpressionAttributeValues: {
              ':pk': "Tutor#1",
              ':subject': subject
            },
          }

          try {
            const data = await queryItem(params)
            return { body: data.Items }
          }
          catch (err) {
            return { error: err }
          }
        }
              
      case "/getTutorBasedOnPhone":
        {
          const phone = event.queryStringParameters.phone;

          const params = {
            TableName: 'Tutor',
            IndexName: 'GS1',
            KeyConditionExpression: 'GS1_PK = :pk',
            ExpressionAttributeValues: {
              ':pk': "Tutor#1",
            },
          }

          try {
            const data = await queryItem(params)
            return { body: data.Items }
          }
          catch (err) {
            return { error: err }
          }
        }

      case "/stocks":
        {

          const params = {
            TableName: 'Tutor',
            KeyConditionExpression: 'PK = :pk',
            ExpressionAttributeValues: {
              ':pk': 'Company'
            }
          }

          try {
            const data = await queryItem(params)
            return { body: data.Items }
          }
          catch (err) {
            return { error: err }
          }

        }
    }
  }
  else if (http.method == "POST") {
    switch (http.path) {
      case "/updateStudentInfo": {
          const data = JSON.parse(event.body)
          // update student row
          const student_request = {
            TableName: 'Tutor',
            Key: {
              PK: data.student,
              SK: "Student#" + data.student
            },
          }
          const student_prev = (await getItem(student_request)).Item
          const student_1 = {
            TableName: 'Tutor',
            Key: {
              PK: data.student,
              SK: "Student#" + data.student
            },
            UpdateExpression: "ADD num_sessions :num",
            ExpressionAttributeValues: {
              ':num': 1
            }
          }
          const student_2 = {
            TableName: 'Tutor',
            Key: {
              PK: data.student,
              SK: "Student#" + data.student
            },
            UpdateExpression: "ADD rating :rating",
            ExpressionAttributeValues: { ":rating": data.rating }
          }
          let new_learning_styles = []
          let sum = 0
          for (let i = 0; i < 4; i++) {
            new_learning_styles[i] = student_prev.learning_styles[i] + data.learning_styles[i]
            sum += new_learning_styles[i]
          }
          for (let i = 0; i < 4; i++) {
            new_learning_styles[i] /= sum
          }
          console.log(new_learning_styles)
          const student_3 = {
            TableName: 'Tutor',
            Key: {
              PK: data.student,
              SK: "Student#" + data.student
            },
            UpdateExpression: "set learning_styles = :learning_styles",
            ExpressionAttributeValues: {
              ':learning_styles': new_learning_styles
            }
          }
          await updateItem(student_1)
          await updateItem(student_2)
          await updateItem(student_3)

      }
      case "/updateTutorInfo": {
        const data = JSON.parse(event.body)
          
          // update tutor row
          const tutor_request = {
            TableName: 'Tutor',
            Key: {
              PK: data.tutor,
              SK: "Tutor#" + data.tutor
            },
          }
          const tutor_prev = (await getItem(tutor_request)).Item
          const tutor_1 = {
            TableName: 'Tutor',
            Key: {
              PK: data.tutor,
              SK: "Tutor#" + data.tutor
            },
            UpdateExpression: "ADD num_sessions :num",
            ExpressionAttributeValues: {
              ':num': 1
            }
          }
          const tutor_2 = {
            TableName: 'Tutor',
            Key: {
              PK: data.tutor,
              SK: "Tutor#" + data.tutor
            },
            UpdateExpression: "ADD rating :rating",
            ExpressionAttributeValues: { ":rating": data.rating }
          }
          let new_teaching_styles = []
          let sum = 0
          for (let i = 0; i < 4; i++) {
            new_teaching_styles[i] = tutor_prev.teaching_styles[i] + data.teaching_styles[i]
            sum += new_teaching_styles[i]
          }
          for (let i = 0; i < 4; i++) {
            new_teaching_styles[i] /= sum
          }
          console.log(new_teaching_styles)
          const tutor_3 = {
            TableName: 'Tutor',
            Key: {
              PK: data.tutor,
              SK: "Tutor#" + data.tutor
            },
            UpdateExpression: "set teaching_styles = :teaching_styles",
            ExpressionAttributeValues: {
              ':teaching_styles': new_teaching_styles
            }
          }
          await updateItem(tutor_1)
          await updateItem(tutor_2)
          await updateItem(tutor_3)
          
      }
      case "/addSession":
        {
          const data = JSON.parse(event.body)
          const params = {
            TableName: 'Tutor',
            Item: {
              PK: data.tutor,
              SK: "Session#" + Date.now(),
              GS1_PK: "Session#" + data.student,
              duration: data.duration,
              subject: data.subject,
              cost: data.cost
            }
          }

          try {
            await putItem(params)
            return { statusCode: 200, body: 'success' }
          }
          catch (err) {
            return { error: err }
          }
        }
      case "/updateDonation":
        {
          const data = JSON.parse(event.body)
          const params = {
            TableName: 'Tutor',
            Key: {
              PK: 'Company',
              SK: data.company
            },
            UpdateExpression: 'set donation = :donation',
            ExpressionAttributeValues: {
              ':donation': data.donation
            }
          }
          
          const params_2 = {
            TableName: 'Tutor',
            Key: {
              PK: 'Company',
              SK: data.company
            },
            UpdateExpression: 'ADD s_score :score',
            ExpressionAttributeValues: {
              ':score': 1
            }
          }

          try {
            await updateItem(params)
            await updateItem(params_2)
            return { statusCode: 200, body: 'success' }
          }
          catch (err) {
            return { error: err }
          }
        }
    }

  }
  const response = {
    statusCode: 404,
    body: 'not a valid path',
  };
  return response;
};

