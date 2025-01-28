exports.getData = (req, res) => {
  const currentDateTime = new Date().toISOString();
  res.status(200).json({
    email: 'chukwuemeka.chukwuma11@gmail.com',
    current_datetime: currentDateTime,
    github_url: 'https://github.com/emekach/hng12-stage-0',
  });
};
