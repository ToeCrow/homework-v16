// /middlewares/auth.js

const authenticate = (req, res, next) => {
  const token = req.headers['authorization'];

  if (req.method === 'GET') {
    return next();
  }

  if (!token || token !== process.env.AUTH_TOKEN) {
    return res.status(401).json({ message: 'Unauthorized!' });
  }

  next();
};

export default authenticate