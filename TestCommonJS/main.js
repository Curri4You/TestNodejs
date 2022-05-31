const logger=require('./logger')
logger.log('This is an informational message')

const customLogger=new logger.constructor('CUSTOM')
customLogger.log('This is a new informational message')


require('./patcher')
const logger2=require('./logger')
logger2.customMessage()