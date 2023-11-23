import BlogIcon from './blog'
import CodeIcon from './code'
import ProjectIcon from './project'
import ServiceIcon from './service'
import TeamIcon from './team'

const icons = {
  project: <ProjectIcon />,
  service: <ServiceIcon />,
  team: <TeamIcon />,
  code: <CodeIcon />,
  blog: <BlogIcon />,
}

export default function getIcon(name) {
  return icons[name]
}
