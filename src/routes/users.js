const router = require('express').Router();

router.get('/', (_req, res) => {
  res.status(200).json({
    message: 'users were fetched',
  });
});

router.post('/', (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  res.status(201).json({
    message: 'User was created',
    user,
  });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    message: 'User details',
    id: req.params.id,
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: 'User deleted',
    id: req.params.id,
  });
});

module.exports = router;