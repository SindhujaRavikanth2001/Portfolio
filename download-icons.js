const https = require('https');
const fs = require('fs');
const path = require('path');

const DEVICON_BASE_URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const DOWNLOAD_DIR = path.join(process.cwd(), 'public', 'tech');

// Ensure the download directory exists
if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

const icons = [
  // Software Development
  { name: 'java', file: 'java/java-original.svg' },
  { name: 'python', file: 'python/python-original.svg' },
  { name: 'javascript', file: 'javascript/javascript-original.svg' },
  { name: 'html', file: 'html5/html5-original.svg' },
  { name: 'css', file: 'css3/css3-original.svg' },
  { name: 'cplusplus', file: 'cplusplus/cplusplus-original.svg' },
  { name: 'php', file: 'php/php-original.svg' },
  { name: 'c', file: 'c/c-original.svg' },
  { name: 'nodejs', file: 'nodejs/nodejs-original.svg' },
  { name: 'processing', file: 'processing/processing-original.svg' },
  
  // Databases & Cloud
  { name: 'mysql', file: 'mysql/mysql-original.svg' },
  { name: 'mongodb', file: 'mongodb/mongodb-original.svg' },
  { name: 'amazonwebservices', file: 'amazonwebservices/amazonwebservices-original.svg' },
  { name: 'azure', file: 'azure/azure-original.svg' },
  
  // Frameworks & Libraries
  { name: 'spring', file: 'spring/spring-original.svg' },
  { name: 'react', file: 'react/react-original.svg' },
  { name: 'angularjs', file: 'angularjs/angularjs-original.svg' },
  { name: 'jquery', file: 'jquery/jquery-original.svg' },
  { name: 'bootstrap', file: 'bootstrap/bootstrap-original.svg' },
  { name: 'drupal', file: 'drupal/drupal-original.svg' },
  { name: 'flask', file: 'flask/flask-original.svg' },
  
  // Data Science
  { name: 'pandas', file: 'pandas/pandas-original.svg' },
  { name: 'numpy', file: 'numpy/numpy-original.svg' },
  { name: 'tensorflow', file: 'tensorflow/tensorflow-original.svg' },
  
  // Tools & Technologies
  { name: 'git', file: 'git/git-original.svg' },
  { name: 'jenkins', file: 'jenkins/jenkins-original.svg' },
  { name: 'docker', file: 'docker/docker-original.svg' },
  { name: 'linux', file: 'linux/linux-original.svg' },
  { name: 'gradle', file: 'gradle/gradle-original.svg' },
  { name: 'unix', file: 'unix/unix-original.svg' }
];

function downloadIcon(iconInfo) {
  const url = `${DEVICON_BASE_URL}/${iconInfo.file}`;
  const filePath = path.join(DOWNLOAD_DIR, `${iconInfo.name}.svg`);

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filePath);
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${iconInfo.name}.svg`);
          resolve();
        });
      } else {
        console.error(`Failed to download ${iconInfo.name}: ${response.statusCode}`);
        reject();
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${iconInfo.name}: ${err.message}`);
      reject(err);
    });
  });
}

async function downloadAllIcons() {
  for (const icon of icons) {
    try {
      await downloadIcon(icon);
    } catch (error) {
      console.error(`Failed to download ${icon.name}`);
    }
  }
}

downloadAllIcons().then(() => {
  console.log('All icons downloaded successfully!');
}).catch((error) => {
  console.error('Error downloading icons:', error);
}); 