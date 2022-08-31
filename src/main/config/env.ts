export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://mongo:27017/clean-ts-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || '964276AA5FA041C1F390861A3A28021E89048216A7E566D6AACA1A10FBA9EFF0'
}
