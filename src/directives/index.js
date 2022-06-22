import app from '@/store/modules/app'
import print from 'vue3-print-nb'

export default app => {
  app.use(print)
}
