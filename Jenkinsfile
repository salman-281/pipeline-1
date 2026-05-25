pipeline {
    agent any

    tools {
        nodejs 'node20'
    }

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
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
            <body style="font-family: Arial; background-color:#f4f4f4; padding:20px;">

                <div style="max-width:600px; margin:auto; background:white; border-radius:10px; padding:30px; box-shadow:0 0 10px rgba(0,0,0,0.1);">

                    <h2 style="color:#16a34a;">✅ Deployment Successful</h2>

                    <p>Your Jenkins CI/CD pipeline completed successfully.</p>

                    <table style="width:100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding:10px; border:1px solid #ddd;"><b>Project</b></td>
                            <td style="padding:10px; border:1px solid #ddd;">${JOB_NAME}</td>
                        </tr>

                        <tr>
                            <td style="padding:10px; border:1px solid #ddd;"><b>Build Number</b></td>
                            <td style="padding:10px; border:1px solid #ddd;">#${BUILD_NUMBER}</td>
                        </tr>

                        <tr>
                            <td style="padding:10px; border:1px solid #ddd;"><b>Status</b></td>
                            <td style="padding:10px; border:1px solid #ddd; color:green;">
                                SUCCESS
                            </td>
                        </tr>
                    </table>

                    <br>

                    <a href="${BUILD_URL}"
                       style="background:#2563eb; color:white; padding:12px 20px;
                       text-decoration:none; border-radius:6px;">
                       View Build
                    </a>

                    <br><br>

                    <p style="color:#777; font-size:13px;">
                        Jenkins Automated CI/CD Pipeline
                    </p>

                </div>

            </body>
            </html>
            """,
            to: "yourgmail@gmail.com"
        )
    }

    failure {
        emailext(
            subject: "❌ FAILED | ${JOB_NAME} #${BUILD_NUMBER}",
            mimeType: 'text/html',
            body: """
            <html>
            <body style="font-family: Arial; background-color:#f4f4f4; padding:20px;">

                <div style="max-width:600px; margin:auto; background:white; border-radius:10px; padding:30px; box-shadow:0 0 10px rgba(0,0,0,0.1);">

                    <h2 style="color:#dc2626;">❌ Deployment Failed</h2>

                    <p>Your Jenkins CI/CD pipeline failed.</p>

                    <table style="width:100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding:10px; border:1px solid #ddd;"><b>Project</b></td>
                            <td style="padding:10px; border:1px solid #ddd;">${JOB_NAME}</td>
                        </tr>

                        <tr>
                            <td style="padding:10px; border:1px solid #ddd;"><b>Build Number</b></td>
                            <td style="padding:10px; border:1px solid #ddd;">#${BUILD_NUMBER}</td>
                        </tr>

                        <tr>
                            <td style="padding:10px; border:1px solid #ddd;"><b>Status</b></td>
                            <td style="padding:10px; border:1px solid #ddd; color:red;">
                                FAILED
                            </td>
                        </tr>
                    </table>

                    <br>

                    <a href="${BUILD_URL}"
                       style="background:#dc2626; color:white; padding:12px 20px;
                       text-decoration:none; border-radius:6px;">
                       View Error Logs
                    </a>

                    <br><br>

                    <p style="color:#777; font-size:13px;">
                        Jenkins Automated CI/CD Pipeline
                    </p>

                </div>

            </body>
            </html>
            """,
            to: "yourgmail@gmail.com"
        )
    }
}
}












