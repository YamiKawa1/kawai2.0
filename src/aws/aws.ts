import fs from 'fs';
import AWS from 'aws-sdk';



//TODO: Prove and fixit up this class, and agregate more content
export class Aws {
    // private s3 = new AWS.S3({
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_SECRET_KEY,
    // });

    // uploadFile = (file) => {
    //     // Read content from the file
    //     const fileContent = fs.readFileSync(file);
    //     console.log(fileContent);
    
    //     // Setting up S3 upload parameters
    //     const params = {
    //         Bucket: process.env.S3_BUCKET_NAME,
    //         Key: file, // File name you want to save as in S3
    //         Body: fileContent
    //     };

    //     const options = {
    //         StorageClass: 'S3 Glacier Storage',
    //         ContentType: 'image/jpeg'
    //     }
    //     // Uploading files to the bucket
        
    //     this.s3.upload(params, options, function(err, data) {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log(`File uploaded successfully. ${data.Location}`);
    //     });
    // };
}
