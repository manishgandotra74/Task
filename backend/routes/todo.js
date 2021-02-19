const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-controller');

router.post('/add-bucket',
    controller.note.addBucket
);
router.get('/get-bucket',
    controller.note.getBucket
);
router.put('/update-bucket/:id',
    controller.note.updateBucket
);
router.get('/get-note/:bucketId',
    controller.note.getNote
);
router.post('/add-note/',
    controller.note.addNote
);
router.put('/update-note/:bucketId',
    controller.note.updateNote
);
module.exports = router;
