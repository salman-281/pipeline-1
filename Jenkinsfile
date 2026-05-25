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
            echo 'Deployment Successful!'
        }

        failure {
            echo 'Deployment Failed!'
        }
    }
}