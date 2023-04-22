pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                // Get code from a GitHub repository
                git url: 'https://github.com/farahjbara/adopti-front.git', branch: 'ci-pipeline',
                 credentialsId: 'github_creds'
            }
        }
    }
}
