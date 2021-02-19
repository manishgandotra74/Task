const db = require('../database/mysqldb');
const responseHelper = require('../responseHandler/responseHandler');
const mysql = require('mysql')
class AuthControllers {
    async addBucket(req, res) {
        console.log(req.body);
        const data = req.body
        try {
            let _sql = "INSERT INTO bucket (name) VALUES (" + mysql.escape(data.name) + ")";
            db.connection.query(_sql, function (err, result) {
                return responseHelper.post(res, 'Bucket Added Successfully ', result);
            });
        } catch (e) {
            console.log(e);
            return responseHelper.onError(res, e, 'Error while creating a bucket');
        }
    }
    async getBucket(req, res) {
        try {
            db.connection.query('Select * from bucket', function (err, result) {
                return responseHelper.post(res, 'Successfully fetch all Buckets ', result);
            });
        } catch (e) {
            return responseHelper.onError(res, e, 'Error while creating a user');
        }
    }
    async updateBucket(req, res) {
        const data = req.body
        try {
            let _sql = "update bucket set name = " + mysql.escape(data.name) + "where id = " + req.params.id;
            db.connection.query(_sql, function (err, result) {
                return responseHelper.post(res, 'Bucket updated Successfully ', result);
            });
        } catch (e) {
            console.log(e);
            return responseHelper.onError(res, e, 'Error while creating a bucket');
        }
    }


    async addNote(req, res) {
        const data = req.body
        try {
            let _sql = "INSERT INTO note (name, bucket_id) VALUES (" + mysql.escape(data.name) + "," + mysql.escape(data.bucket_id) + ")";
            db.connection.query(_sql, function (err, result) {
                if (result) {
                    return responseHelper.post(res, 'Note Added Successfully ', result);
                } else {
                    return responseHelper.onError(res, '', 'Error while creating a note');

                }
            });
        } catch (e) {
            return responseHelper.onError(res, e, 'Error while creating a bucket');
        }
    }
    async getNote(req, res) {
        try {
            let sql = 'Select * from note where bucket_id=' + req.params.bucketId
            console.log(sql);
            db.connection.query('Select * from note where bucket_id=' + req.params.bucketId, function (err, result) {
                return responseHelper.post(res, 'Successfully fetch all Buckets ', result);
            });
        } catch (e) {
            return responseHelper.onError(res, e, 'Error while creating a user');
        }
    }
    async updateNote(req, res) {
        const data = req.body
        try {
            let _sql = "update note set name = " + mysql.escape(data.name) + "where id = " + req.params.bucketId;
          console.log(req.params, req.param);
            db.connection.query(_sql, function (err, result) {
                console.log(result);
                if (result) {
                    return responseHelper.post(res, 'Note updated Successfully ', result);
                } else {
                    return responseHelper.onError(res, '', 'Error while creating a bucket');
                }
            });
        } catch (e) {
            return responseHelper.onError(res, e, 'Error while creating a bucket');
        }
    }

}

module.exports = AuthControllers