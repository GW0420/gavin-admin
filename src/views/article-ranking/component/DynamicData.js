import i18n from '@/i18n'

export default () => [
  {
    label: i18n.global.t('msg.article.ranking'),
    prop: 'ranking'
  },
  {
    label: i18n.global.t('msg.article.title'),
    prop: 'title'
  },
  {
    label: i18n.global.t('msg.article.author'),
    prop: 'author'
  },
  {
    label: i18n.global.t('msg.article.publicDate'),
    prop: 'publicDate'
  },
  {
    label: i18n.global.t('msg.article.desc'),
    prop: 'desc',
    width: 500
  },
  {
    label: i18n.global.t('msg.article.action'),
    prop: 'action'
  }
]
