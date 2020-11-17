// 打包之后自动上传到我的服务器

// 项目上传
const path = require('path');
const SftpClient = require('ssh2-sftp-client');

// 服务器配置
const config = {
    host: '39.107.244.149', // 服务器 IP
    port: '22',
    username: 'Administrator',
    password: '11428020Asd'
};

// 上传的文件目录
const src = path.join(__dirname, './dist');
// 写入远程服务器的目录
const dst = 'C:/Program Files/nginx-1.18.0/nginx-1.18.0/html';

async function main() {
    const client = new SftpClient(); // SftpClient('upload-test');
    try {
        await client.connect(config);
        client.on('upload', info => {
            console.log(`Listener: Uploaded ${info.source}`);
        });
        let rslt = await client.uploadDir(src, dst);
        return rslt;
    } finally {
        client.end();
    }
}

main()
    .then(msg => {
        console.log(msg);
        console.log('\033[43;32m 文件上传成功')
    })
    .catch(err => {
        console.log(`main error: ${err.message}`);
    });