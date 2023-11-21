import github from './github'
import twitter from './twitter'
import linkedin from './linkedin'
import whatsapp from './whatsapp'

const icons = {
  github,
  twitter,
  linkedin,
  whatsapp,
}

module.exports = {
  getIcon: function (name) {
    const Icon = icons[name]
    return <Icon />
  },
}
