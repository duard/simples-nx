import { extname } from 'path';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  console.log('aqqq', req.body);
  const fileExtName = extname(file.originalname);
  callback(null, `${Date.now()}${fileExtName}`);
};
