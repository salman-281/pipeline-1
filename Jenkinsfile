pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
        EMAIL_TO = 'salman034810@gmail.com'
        TWILIO_SID = credentials('twilio-sid')
        TWILIO_TOKEN = credentials('twilio-token')
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build Next.js App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Deploy to Vercel') {
            steps {
                bat 'npx vercel --prod --token=%VERCEL_TOKEN% --yes'
            }
        }
    }

    post {

    success {

          bat '''
    curl -X POST https://api.twilio.com/2010-04-01/Accounts/%TWILIO_SID%/Messages.json ^
    --data-urlencode "From=whatsapp:+14155238886" ^
    --data-urlencode "To=whatsapp:+923481077653" ^
    --data-urlencode "Body=✅ Build SUCCESS: %JOB_NAME% Build #%BUILD_NUMBER%" ^
    -u %TWILIO_SID%:%TWILIO_TOKEN%
    '''
        emailext(
            to: "salman034810@gmail.com",
            subject: "✅ SUCCESS | ${JOB_NAME} #${BUILD_NUMBER}",
            mimeType: 'text/html',
            from: "salman034810@gmail.com",
            replyTo: "salman034810@gmail.com",
            body: """
            <html>
            <body>
                <h2>✅ Deployment Successful</h2>

                <p>Project: ${JOB_NAME}</p>
                <p>Build: #${BUILD_NUMBER}</p>
                <p>Status: SUCCESS</p>

                <a href="${BUILD_URL}">
                    View Build
                </a>

            </body>
            </html>
            """
        )
    }

    failure {


        bat '''
    curl -X POST https://api.twilio.com/2010-04-01/Accounts/%TWILIO_SID%/Messages.json ^
    --data-urlencode "From=whatsapp:+14155238886" ^
    --data-urlencode "To=whatsapp:+923481077653" ^
    --data-urlencode "Body=❌ Build FAILED: %JOB_NAME% Build #%BUILD_NUMBER%" ^
    -u %TWILIO_SID%:%TWILIO_TOKEN%
    '''
        emailext(
            to: "salman034810@gmail.com",
            subject: "❌ FAILED | ${JOB_NAME} #${BUILD_NUMBER}",
            mimeType: 'text/html',
            from: "salman034810@gmail.com",
            replyTo: "salman034810@gmail.com",
            body: """
            <html>
            <body>
                <h2>❌ Deployment Failed</h2>

                <p>Project: ${JOB_NAME}</p>
                <p>Build: #${BUILD_NUMBER}</p>
                <p>Status: FAILED</p>

                <a href="${BUILD_URL}">
                    View Logs
                </a>

            </body>
            </html>
            """
        )
    }
}
}