pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
        EMAIL_TO = 'salman034810@gmail.com'
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