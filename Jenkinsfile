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
                subject: "✅ SUCCESS | ${JOB_NAME} #${BUILD_NUMBER}",
                mimeType: 'text/html',
                body: """
                <html>
                <body style="font-family:Arial;padding:20px;background:#f4f4f4;">
                    <div style="background:white;padding:30px;border-radius:10px;">
                        <h2 style="color:#16a34a;">
                            ✅ Deployment Successful
                        </h2>

                        <p>Jenkins CI/CD pipeline completed successfully.</p>

                        <p><b>Project:</b> ${JOB_NAME}</p>
                        <p><b>Build:</b> #${BUILD_NUMBER}</p>
                        <p><b>Status:</b>
                        <span style="color:green;">
                        SUCCESS
                        </span></p>

                        <a href="${BUILD_URL}">
                        View Build
                        </a>

                    </div>
                </body>
                </html>
                """,
                to: "${EMAIL_TO}"
            )
        }

        failure {
            emailext(
                subject: "❌ FAILED | ${JOB_NAME} #${BUILD_NUMBER}",
                mimeType: 'text/html',
                body: """
                <html>
                <body style="font-family:Arial;padding:20px;background:#f4f4f4;">
                    <div style="background:white;padding:30px;border-radius:10px;">
                        <h2 style="color:#dc2626;">
                            ❌ Deployment Failed
                        </h2>

                        <p>Jenkins CI/CD pipeline failed.</p>

                        <p><b>Project:</b> ${JOB_NAME}</p>
                        <p><b>Build:</b> #${BUILD_NUMBER}</p>
                        <p><b>Status:</b>
                        <span style="color:red;">
                        FAILED
                        </span></p>

                        <a href="${BUILD_URL}"> 
                        View Logs
                        </a>

                    </div>
                </body>
                </html> 
                """,
                to: "${EMAIL_TO}"
            )
        }
    }
}