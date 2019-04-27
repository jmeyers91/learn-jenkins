pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-p 9090:9090'
        }
    }
    environment { 
        CI = 'true'
        NODE_ENV = 'production'
    }
    stages {
        stage('Build') {
            steps {
              sh 'npm install'
              sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deliver') { 
            steps {
                sh 'npm run deploy'
            }
        }
    }
}